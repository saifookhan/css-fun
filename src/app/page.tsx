"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const mainElement = document.querySelector("main");

    // Apply styles using JavaScript
    if (mainElement) {
      mainElement.style.backgroundImage = "url(/images/bg-hue/bg-hue.svg)";
      mainElement.style.backgroundPosition = "50%";
      mainElement.style.backgroundSize = "cover";
    }

    mainElement?.style.setProperty("will-change", "filter", "");
    let hue = 0;

    setInterval(function () {
      hue = (hue + 1) % 360;

      mainElement?.style.setProperty(
        "filter",
        "hue-rotate(" + hue + "deg)",
        ""
      );
    }, 5000 / 360);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-left pt-24 pl-12 justify-between">
      <div>
        <h1 className="text-5xl font-bold text-yellow-600 mb-4">CSS FUN 🎉</h1>
        <ol>
          <li>
            <a href="/01-viewport">01-viewport</a>
          </li>
          <li>
            <a href="/02-media-queries">02-media-queries (oritentation)</a>
          </li>
          <li>
            <a href="/03-media-queries">03-media-queries (aspect ratios)</a>
          </li>
          <li>
            <a href="/04-media-queries">04-media-queries (ranges)</a>
          </li>
          <li>
            <a href="/07-css-grid">07-css grid</a>
          </li>
          <li>
            <a href="/08-css-grid">08-css grid (auto-fill, autofit)</a>
          </li>
          <li>
            <a href="/09-css-grid">09-css grid (auto row & col height)</a>
          </li>
          <li>
            <a href="/10-width-clamp">
              10-width-clamp(min-width, width, max-width)
            </a>
          </li>
        </ol>
      </div>
      <p className="text-sm font-bold text-black self-start">
        <a href="https://github.com/saifookhan/advanced-css" target="_blank">
          Star this repository here ★
        </a>
      </p>
    </main>
  );
}
