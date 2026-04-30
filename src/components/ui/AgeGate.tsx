"use client";

import { CalendarDays, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { brandAssets } from "@/lib/branding";

const STORAGE_KEY = "legends-age-gate-approved-at";
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;
const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
] as const;
const WEEKDAY_NAMES = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"] as const;

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

function formatLongDate(year: number, month: number, day: number) {
  return `${MONTH_NAMES[month]} ${day}, ${year}`;
}

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function buildCalendarDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const currentMonthDays = getDaysInMonth(year, month);
  const previousMonthDays = getDaysInMonth(year, month === 0 ? year - 1 : year, month === 0 ? 11 : month - 1);
  const days: Array<{ day: number; monthOffset: -1 | 0 | 1 }> = [];

  for (let index = firstDay - 1; index >= 0; index -= 1) {
    days.push({ day: previousMonthDays - index, monthOffset: -1 });
  }

  for (let day = 1; day <= currentMonthDays; day += 1) {
    days.push({ day, monthOffset: 0 });
  }

  while (days.length < 42) {
    days.push({ day: days.length - (firstDay + currentMonthDays) + 1, monthOffset: 1 });
  }

  return days;
}

export function AgeGate({ children }: AgeGateProps) {
  const today = new Date();
  const [birthDate, setBirthDate] = useState("");
  const [message, setMessage] = useState("");
  const [approvedAtOverride, setApprovedAtOverride] = useState<string | null>(null);
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState(today.getMonth());
  const [calendarYear, setCalendarYear] = useState(today.getFullYear());
  const calendarRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (!calendarOpen) {
      return;
    }

    const handlePointerDown = (event: MouseEvent) => {
      if (!calendarRef.current?.contains(event.target as Node)) {
        setCalendarOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [calendarOpen]);

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

  const selectedParts = birthDate ? birthDate.split("-").map(Number) : null;
  const calendarDays = buildCalendarDays(calendarYear, calendarMonth);
  const selectedLabel = selectedParts
    ? formatLongDate(selectedParts[0], selectedParts[1] - 1, selectedParts[2])
    : "Choose your date of birth";
  const yearOptions = Array.from({ length: today.getFullYear() - 1899 }, (_, index) => today.getFullYear() - index);

  const openPicker = () => {
    if (selectedParts) {
      setCalendarYear(selectedParts[0]);
      setCalendarMonth(selectedParts[1] - 1);
    }

    setCalendarOpen(true);
  };

  const selectCalendarDay = (day: number, monthOffset: -1 | 0 | 1) => {
    let nextMonth = calendarMonth + monthOffset;
    let nextYear = calendarYear;

    if (nextMonth < 0) {
      nextMonth = 11;
      nextYear -= 1;
    } else if (nextMonth > 11) {
      nextMonth = 0;
      nextYear += 1;
    }

    setCalendarMonth(nextMonth);
    setCalendarYear(nextYear);
    setBirthDate(
      `${nextYear}-${String(nextMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
    );
    setMessage("");
  };

  const selectedDayMatch = selectedParts
    ? {
        year: selectedParts[0],
        month: selectedParts[1] - 1,
        day: selectedParts[2],
      }
    : null;

  const isFutureDate = (year: number, month: number, day: number) => {
    const candidate = new Date(year, month, day);
    candidate.setHours(0, 0, 0, 0);

    const limit = new Date();
    limit.setHours(0, 0, 0, 0);

    return candidate > limit;
  };

  return (
    <>
      <div className="age-gate-shell">
        <div className="age-gate-panel ornamental-border stone-overlay">
          <div className="age-gate-brand">
            <div className="age-gate-logo-wrap">
              <img
                src={brandAssets.mainLogo}
                alt="Legends logo"
                className="age-gate-logo"
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
              <div className="age-gate-calendar-wrap" ref={calendarRef}>
                <button
                  className="age-gate-date-trigger"
                  onClick={() => setCalendarOpen((current) => !current)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      openPicker();
                    }
                  }}
                  type="button"
                  aria-haspopup="dialog"
                  aria-expanded={calendarOpen}
                >
                  <span className={birthDate ? "age-gate-date-value" : "age-gate-date-placeholder"}>
                    {formatBirthDate(birthDate)}
                  </span>
                  <span className="age-gate-date-icon" aria-hidden="true">
                    <CalendarDays size={22} strokeWidth={2.1} />
                  </span>
                </button>

                {calendarOpen ? (
                  <div className="age-gate-calendar-popover" role="dialog" aria-label="Date of birth calendar">
                    <div className="age-gate-calendar-selected">{selectedLabel}</div>
                    <div className="age-gate-calendar-card">
                      <div className="age-gate-calendar-controls">
                        <label className="age-gate-calendar-select">
                          <select
                            value={calendarMonth}
                            onChange={(event) => setCalendarMonth(Number(event.target.value))}
                          >
                            {MONTH_NAMES.map((monthName, index) => (
                              <option key={monthName} value={index}>
                                {monthName}
                              </option>
                            ))}
                          </select>
                          <ChevronDown size={16} />
                        </label>

                        <label className="age-gate-calendar-select age-gate-calendar-select--year">
                          <select
                            value={calendarYear}
                            onChange={(event) => setCalendarYear(Number(event.target.value))}
                          >
                            {yearOptions.map((yearOption) => (
                              <option key={yearOption} value={yearOption}>
                                {yearOption}
                              </option>
                            ))}
                          </select>
                          <ChevronDown size={16} />
                        </label>
                      </div>

                      <div className="age-gate-calendar-weekdays">
                        {WEEKDAY_NAMES.map((dayName) => (
                          <span key={dayName}>{dayName}</span>
                        ))}
                      </div>

                      <div className="age-gate-calendar-grid">
                        {calendarDays.map(({ day, monthOffset }, index) => {
                          const cellMonth = calendarMonth + monthOffset;
                          const normalizedMonth = cellMonth < 0 ? 11 : cellMonth > 11 ? 0 : cellMonth;
                          const normalizedYear =
                            cellMonth < 0 ? calendarYear - 1 : cellMonth > 11 ? calendarYear + 1 : calendarYear;
                          const isSelected = Boolean(
                            selectedDayMatch &&
                              selectedDayMatch.day === day &&
                              selectedDayMatch.month === normalizedMonth &&
                              selectedDayMatch.year === normalizedYear
                          );
                          const isMuted = monthOffset !== 0;
                          const disabled = isFutureDate(normalizedYear, normalizedMonth, day);

                          return (
                            <button
                              key={`${normalizedYear}-${normalizedMonth}-${day}-${index}`}
                              className={`age-gate-calendar-day${isSelected ? " is-selected" : ""}${isMuted ? " is-muted" : ""}`}
                              disabled={disabled}
                              type="button"
                              onClick={() => selectCalendarDay(day, monthOffset)}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>

                      <div className="age-gate-calendar-actions">
                        <button
                          className="age-gate-calendar-cancel"
                          type="button"
                          onClick={() => setCalendarOpen(false)}
                        >
                          Cancel
                        </button>
                        <button
                          className="age-gate-calendar-confirm"
                          type="button"
                          onClick={() => setCalendarOpen(false)}
                        >
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                ) : null}
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
