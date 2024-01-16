import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="/">Back to home</Link>

      <div className="box"></div>
      <p>
        this has{" "}
        <span className="font-mono text-gray-400">
          min-width, width and max-width
        </span>
      </p>
      <br />
      <br />
      <div className="box-clamp"></div>

      <p>
        this has{" "}
        <span className="font-mono text-gray-400">
          width: clamp(300px, 75%, 500px);
        </span>
      </p>
    </>
  );
}
