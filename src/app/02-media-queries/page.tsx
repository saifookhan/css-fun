import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">Back to home</Link>
      <div className="box"></div>
      <p>box changes color &lt;200px</p>
      <br />
      <div className="box-orientation"></div>
      <p>box changes color on orientation</p>
      <p>on square, portait is preferred</p>
    </div>
  );
}
