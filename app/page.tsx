import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full px-5 md:w-[300px] md:ml-10 mt-10 space-y-2">
      <p>
        <span className="text-red-800">hci.club</span> is an eclectic collective
        of researchers, developers, writers, designers, musicians, meditators,
        and designers who are interested in the future of computing.{" "}
      </p>
      <p>
        this is our home on the internet, which operates as a
        &quot;potluck&quot; site - members are free to add pages as they wish.
        besides the homepage and navigation, not much coherence is guaranteed at
        all.
      </p>
      <p className="mt-10">
        <span className="text-red-800">hci.club</span> is:
      </p>
      <div>
        <Link className="block underline text-blue-800" href="/parth">
          parth agrawal
        </Link>
        <Link className="block underline text-blue-800" href="/liam">
          liam duffy
        </Link>
        <Link className="block underline text-blue-800" href="/nick">
          nicholas chen
        </Link>
        <Link className="block underline text-blue-800" href="/andrew">
          andrew blevins
        </Link>
        <Link className="block underline text-blue-800" href="/pavitthra">
          pavitthra pandurangan
        </Link>
        <Link className="block underline text-blue-800" href="/arjun">
          arjun sanya
        </Link>
        others, who attend our{" "}
        <a
          href="https://x.com/mr_samosaman/status/1946182023581749614?s=20"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-800"
        >
          book club
        </a>
        , game nights, demos, and{" "}
        <a
          href="https://x.com/mr_samosaman/status/1949815150753550416?s=20"
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-blue-800"
        >
          work group
        </a>
      </div>
    </div>
  );
}
