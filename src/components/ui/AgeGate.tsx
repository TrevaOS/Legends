"use client";

import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const STORAGE_KEY = "legends-age-gate-approved-at";
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;
const AGE_GATE_LOGO = "/assets/logos/Legends_Logo_Variations_page-0001.png";

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

function formatBirthDate(value: string) {
  if (!value) {
    return "DD-MM-YYYY";
  }

  const [year, month, day] = value.split("-");

  if (!year || !month || !day) {
    return "DD-MM-YYYY";
  }

  return `${day}-${month}-${year}`;
}

export function AgeGate({ children }: AgeGateProps) {
  const [birthDate, setBirthDate] = useState("");
  const [message, setMessage] = useState("");
  const [approvedAtOverride, setApprovedAtOverride] = useState<string | null>(null);
  const dateInputRef = useRef<HTMLInputElement>(null);

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

    if (!birthDate) {
      setMessage("Please enter your full date of birth.");
      return;
    }

    const [yearValue, monthValue, dayValue] = birthDate.split("-").map(Number);

    if (
      !Number.isInteger(monthValue) ||
      !Number.isInteger(dayValue) ||
      !Number.isInteger(yearValue)
    ) {
      setMessage("Please enter a valid date of birth.");
      return;
    }

    if (!isValidDateParts(monthValue, dayValue, yearValue)) {
      setMessage("Please enter a valid date of birth.");
      return;
    }

    if (!isTwentyOneOrOlder(monthValue, dayValue, yearValue)) {
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

  const openPicker = () => {
    dateInputRef.current?.showPicker?.();
    dateInputRef.current?.focus();
  };

  return (
    <>
      <div className="age-gate-shell">
        <div className="age-gate-panel ornamental-border stone-overlay">
          <div className="age-gate-brand">
            <div className="age-gate-logo-wrap">
              <Image
                src={AGE_GATE_LOGO}
                alt="Legends logo"
                className="age-gate-logo"
                width={180}
                height={180}
                priority
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

            <label className="age-gate-field age-gate-field--single">
              <span>Date of Birth</span>
              <div
                className="age-gate-date-trigger"
                onClick={openPicker}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openPicker();
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label="Choose date of birth"
              >
                <span className={birthDate ? "age-gate-date-value" : "age-gate-date-placeholder"}>
                  {formatBirthDate(birthDate)}
                </span>
                <span className="age-gate-date-icon" aria-hidden="true">
                  <CalendarDays size={22} strokeWidth={2.1} />
                </span>
                <input
                  ref={dateInputRef}
                  className="age-gate-date-input"
                  type="date"
                  autoComplete="bday"
                  value={birthDate}
                  onChange={(event) => setBirthDate(event.target.value)}
                  max={new Date().toISOString().split("T")[0]}
                />
              </div>
            </label>

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
          </div>
        </div>
      </div>
    </>
  );
}
