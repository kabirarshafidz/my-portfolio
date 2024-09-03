"use client";
import Header from "./../components/Header";
import { useState } from "react";

export default function Home() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }
  return (
    <div className="flex flex-col h-screen">
      <Header onHomeClicked={handleClick} />
      <main
        className={`grow flex items-center justify-center text-center ${
          clicked ? `fade-out` : "fade-in"
        }`}
      >
        <div className="pb-16 mx-4 md:mx-0">
          <div className="text-2xl md:text-5xl mb-6">
            <p className="mb-4">
              Hello 👋🏻 I&#39;m <span>ARSHA</span>
            </p>
            <p>A student and a part-time web developer</p>
          </div>
          <div className="flex gap-4 justify-center">
            <a href="/projects" className="border-animation pb-1 text-md">
              <div className="flex">
                <p className="mr-2">See my projects</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" />
                </svg>
                <hr />
              </div>
            </a>
            <a href="/about" className="border-animation pb-1">
              <div className="flex gap-3">
                <p>About me</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
