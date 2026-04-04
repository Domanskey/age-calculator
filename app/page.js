"use client";

import { useState } from "react";
import { DateTime } from "luxon";

export default function Home() {
  const [date, setDate] = useState(null);
  const [diff, setDiff] = useState(null);
  const now = DateTime.local();

  const countDiff = () => {
    if (!date) setDiff(null);
    else if (date >= now || date === -1) setDiff(-1);
    else {
      setDiff(now.diff(date, ["years", "months"]).toObject());
    }
  };

  return (
    <main className="">
      <h1 className="mb-4 text-4xl sm:text-5xl">Age Calculator</h1>
      <form className="text-md mb-4 flex min-w-2xs flex-col gap-2 text-lg sm:min-w-96 sm:text-xl">
        <label htmlFor="date">Enter your birth date:</label>
        <input //YYYY-MM-DD or <empty string> if wrong
          className="rounded-md border border-zinc-950 p-1 dark:border-zinc-50"
          onChange={(e) => {
            if (e.target.value === "") setDate(-1);
            else setDate(DateTime.fromISO(e.target.value));
          }}
          type="date"
          id="date"
          name="date"
          required
          minLength="4"
          maxLength="8"
        />
        <button
          type="button" // not to submit
          className="cursor-pointer rounded-md bg-zinc-950 p-1 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950"
          onClick={countDiff}
        >
          Calculate
        </button>
      </form>
      {diff &&
        (diff === -1 ? (
          <p className="sm:text-xl">Wrong date!</p>
        ) : (
          <p className="sm:text-xl">
            you're {diff.years} years {Math.floor(diff.months)} months old
          </p>
        ))}
    </main>
  );
}
