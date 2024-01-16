import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">Back to home</Link>
      <div className="box"></div>
      <p>
        box changes color on{" "}
        <span className="font-mono code-highlight bg-code-highlight">
          300px &lt;= width &lt;= 500px
        </span>
      </p>

      <br />
      <a
        className="text-blue-500"
        href="https://caniuse.com/css-media-range-syntax"
      >
        Browser support
      </a>
    </div>
  );
}
