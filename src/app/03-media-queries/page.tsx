import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">Back to home</Link>
      <div className="box"></div>
      <p>
        box changes color on{" "}
        <span className="font-mono code-highlight bg-code-highlight">
          min-aspect-ratio: 1/1
        </span>
      </p>
      <p>
        width/height{" "}
        <span className="font-mono code-highlight bg-code-highlight">
          min-aspect-ratio: 16/9
        </span>
      </p>
      <br />
    </div>
  );
}
