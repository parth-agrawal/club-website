import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full mx-5 md:w-[300px] md:ml-10 mt-10 space-y-2">
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
        <span className="text-red-800">hci.club</span> consists of:
      </p>
      <div>
        <Link className="block underline text-blue-800" href="/parth">
          parth agarwal
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
      </div>
    </div>
  );
}
