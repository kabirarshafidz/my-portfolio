"use client";
import Image from "next/image";
import Header from "./../../components/Header";
import { useState } from "react";

export default function About() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <div className="flex flex-col h-screen">
      <Header onHomeClicked={handleClick} />
      <main
        className={`grow flex flex-col items-center justify-center text-center ${
          clicked ? `fade-out` : "fade-in"
        }`}
      >
        <div className="grid grid-cols-2 pb-16">
          {/* <div className="absolute top-1/4 right-1/2 left-0 h-auto mr-8">
            <div className="about-container rounded-r-3xl">
              <div className="p-8 text-right pl-36">
                <h1 className="page-title">ABOUT ME</h1>
                <p className="text-lg">
                  Hi! I'm <span>HAFIDZ ARSHA KABIRA</span>. I'm an incoming
                  Advanced Computing student at the University of Sydney with a
                  strong interest in Web Development, Data Science, and Machine
                  Learning. I'm passionate about creating innovative solutions
                  that make a real-world impact and am currently focused on
                  enhancing my skills in full-stack development and exploring
                  data-driven decision-making. Let's connect and build something
                  great together!
                </p>
              </div>
            </div>
            <div className="flex justify-end mt-6 mr-8">
              <a href="/contact">
                <button className="btn-primary">Contact me</button>
              </a>
            </div>
          </div>
          <div className="about-container absolute bottom-1/4 right-0 left-1/2 h-1/3 rounded-l-3xl ml-8">
            <img
              src="./myprofile.svg"
              alt=""
              className="absolute bottom-0 h-auto w-3/4"
            />
          </div> */}
          <div className=" top-1/4 right-1/2 left-0 mr-8">
            <div className="about-container rounded-r-3xl">
              <div className="p-8 text-right pl-36">
                <h1 className="page-title">ABOUT ME</h1>
                <p className="text-lg">
                  Hi! I&#39;m <span>HAFIDZ ARSHA KABIRA</span>. I&#39;m an
                  incoming Advanced Computing student at the University of
                  Sydney with a strong interest in Web Development, Data
                  Science, and Machine Learning. I&#39;m passionate about
                  creating innovative solutions that make a real-world impact
                  and am currently focused on enhancing my skills in full-stack
                  development and exploring data-driven decision-making.
                  Let&#39;s connect and build something great together!
                </p>
              </div>
            </div>
            <div className="flex justify-end mt-6 mr-8">
              <a href="/contact">
                <button className="btn-primary transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg hover:shadow-[#9ed6b5]">
                  Contact me
                </button>
              </a>
            </div>
          </div>
          <div className="grid grid-rows-2">
            <div></div>
            <div className="about-container relative rounded-l-3xl ml-8">
              <img
                src="./myprofile.svg"
                alt=""
                className="fading-image absolute w-3/4 left-0 bottom-0"
              />
            </div>
          </div>
        </div>
        {/* <div className="text-center">
          <h1 className="page-title">EDUCATIONAL BACKGROUND</h1>
          <div className="grid grid-cols-3 gap-0 mt-16">
            <div>
              <img
                src="/university-of-sydney.svg"
                alt=""
                className="object-contain"
              />
            </div>
            <div>
              <img
                src="/nanyang-technological-university.svg"
                alt=""
                className="object-contain"
              />
            </div>
            <div>
              <img
                src="/sma-pradita-dirgantara.svg"
                alt=""
                className="object-contain"
              />
            </div>
          </div>
        </div> */}
      </main>
    </div>
  );
}
