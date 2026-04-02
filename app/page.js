import Form from "next/form";

export default function Home() {
  return (
    <main className="">
      <h1 className="mb-4 text-4xl sm:text-5xl">Age Calculator</h1>
      <form className="text-md mb-4 flex min-w-2xs flex-col gap-2 text-lg sm:min-w-96 sm:text-xl">
        <label htmlFor="date">Enter your birth date:</label>
        <input
          className="rounded-md border border-zinc-950 p-1 dark:border-zinc-50"
          type="date"
          id="date"
          name="date"
          required
          minLength="4"
          maxLength="8"
        />
        <button className="rounded-md bg-zinc-950 p-1 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950">
          Calculate
        </button>
      </form>
      <p className="sm:text-xl">you're 21 years 10 months old</p>
    </main>
  );
}
