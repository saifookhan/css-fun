import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">Back to home</Link>

      <div className="flex min-h-screen flex-col items-left justify-between p-24">
        <ol>
          <li>
            <a href="/1-viewport">BBBB</a>
          </li>
        </ol>
      </div>
    </div>
  );
}
