"use client";

import Image from "next/image";
import { useEffect, useState, useSyncExternalStore } from "react";
import { brandAssets } from "@/lib/branding";

const STORAGE_KEY = "legends-age-gate-approved-at";
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

type AgeGateProps = {
  children: React.ReactNode;
};

function isStoredApprovalValid(value: string | null) {
  if (!value) {
    return false;
  }

  const approvedAt = Number(value);

  if (!Number.isFinite(approvedAt)) {
    return false;
  }

  return Date.now() - approvedAt < THIRTY_DAYS_MS;
}

function isValidDateParts(month: number, day: number, year: number) {
  if (year < 1900 || year > new Date().getFullYear()) {
    return false;
  }

  const candidate = new Date(year, month - 1, day);

  return (
    candidate.getFullYear() === year &&
    candidate.getMonth() === month - 1 &&
    candidate.getDate() === day
  );
}

function isTwentyOneOrOlder(month: number, day: number, year: number) {
  const today = new Date();
  const birthDate = new Date(year, month - 1, day);
  const legalDate = new Date(
    today.getFullYear() - 21,
    today.getMonth(),
    today.getDate()
  );

  return birthDate <= legalDate;
}

export function AgeGate({ children }: AgeGateProps) {
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [message, setMessage] = useState("");
  const [approvedAtOverride, setApprovedAtOverride] = useState<string | null>(null);

  const storedApproval = useSyncExternalStore(
    () => () => {},
    () => {
      const storedValue = window.localStorage.getItem(STORAGE_KEY);

      if (isStoredApprovalValid(storedValue)) {
        return storedValue;
      }

      if (storedValue) {
        window.localStorage.removeItem(STORAGE_KEY);
      }

      return null;
    },
    () => null
  );
  const isApproved = approvedAtOverride !== null || storedApproval !== null;

  useEffect(() => {
    if (isApproved) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isApproved]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const parsedMonth = Number(month);
    const parsedDay = Number(day);
    const parsedYear = Number(year);

    if (
      !Number.isInteger(parsedMonth) ||
      !Number.isInteger(parsedDay) ||
      !Number.isInteger(parsedYear)
    ) {
      setMessage("Please enter your full date of birth.");
      return;
    }

    if (!isValidDateParts(parsedMonth, parsedDay, parsedYear)) {
      setMessage("Please enter a valid date of birth.");
      return;
    }

    if (!isTwentyOneOrOlder(parsedMonth, parsedDay, parsedYear)) {
      setMessage("Under age. You must be 21 or older to enter.");
      return;
    }

    window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
    setApprovedAtOverride(String(Date.now()));
    setMessage("");
  };

  if (isApproved) {
    return <>{children}</>;
  }

  return (
    <>
      <div className="age-gate-shell">
        <div className="age-gate-panel ornamental-border stone-overlay">
          <div className="age-gate-brand">
            <div className="age-gate-logo-wrap">
              <Image
                src={brandAssets.mainLogo}
                alt="Legends logo"
                className="age-gate-logo"
                width={64}
                height={64}
              />
            </div>
            <p className="age-gate-kicker">LEGENDS</p>
            <h1 className="age-gate-title royal-heading">Are You Over 21?</h1>
            <p className="age-gate-copy">
              You can enjoy this website if you are of legal drinking age.
              We only remember that you were approved for 30 days.
            </p>
          </div>

          <form className="age-gate-form" onSubmit={handleSubmit}>
            <p className="age-gate-label">Please enter your date of birth.</p>

            <div className="age-gate-grid">
              <label className="age-gate-field">
                <span>Month</span>
                <input
                  inputMode="numeric"
                  autoComplete="bday-month"
                  maxLength={2}
                  placeholder="MM"
                  value={month}
                  onChange={(event) => setMonth(event.target.value.replace(/\D/g, "").slice(0, 2))}
                />
              </label>

              <label className="age-gate-field">
                <span>Day</span>
                <input
                  inputMode="numeric"
                  autoComplete="bday-day"
                  maxLength={2}
                  placeholder="DD"
                  value={day}
                  onChange={(event) => setDay(event.target.value.replace(/\D/g, "").slice(0, 2))}
                />
              </label>

              <label className="age-gate-field">
                <span>Year</span>
                <input
                  inputMode="numeric"
                  autoComplete="bday-year"
                  maxLength={4}
                  placeholder="YYYY"
                  value={year}
                  onChange={(event) => setYear(event.target.value.replace(/\D/g, "").slice(0, 4))}
                />
              </label>
            </div>

            <button className="age-gate-submit royal-shimmer" type="submit">
              Enter
            </button>

            {message ? (
              <p className="age-gate-message" role="alert">
                {message}
              </p>
            ) : null}
          </form>

          <div className="age-gate-footer">
            <p className="age-gate-responsibility royal-heading">Enjoy Responsibly</p>
            <p className="age-gate-disclaimer">
              Do not share this content with those under 21.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
