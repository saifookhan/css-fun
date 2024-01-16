import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">Back to home</Link>
      <p>
        fr = Fr is a fractional unit and 1fr is for 1 part of the available
        space.
      </p>
      <div className="grid">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <p>
        grid is set for:{" "}
        <span className="font-mono code-highlight bg-code-highlight">
          grid-template-columns: repeat(3, 1fr);
        </span>
      </p>
      <br />
      <br />
      <div className="grid-two">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
      <p>
        grid is set for:{" "}
        <span className="font-mono code-highlight bg-code-highlight">
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        </span>
      </p>
      <br />
      <br />
      <div className="grid-three">
        <div className="box-three"></div>
        <div className="box-three"></div>
        <div className="box-three"></div>
        <div className="box-three"></div>
        <div className="box-three"></div>
      </div>
      <p>
        no width:200px; is set for box-three, it is automatically taken from the
        parent&apos;s minmax function{" "}
        <span className="font-mono code-highlight bg-code-highlight">
          minmax(100px, 1fr);
        </span>
      </p>
    </div>
  );
}
