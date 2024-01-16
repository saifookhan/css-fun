import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">Back to home</Link>

      <div className="grid">
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <p>
        taking height of parent:{" "}
        <span className="font-mono code-highlight bg-code-highlight">
          grid-auto-rows: 200px;
        </span>
      </p>
    </div>
  );
}
