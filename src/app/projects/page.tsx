"use client";
import Image from "next/image";
import List from "./../../components/List";
import { useState } from "react";
import Header from "./../../components/Header";

export default function Projects() {
  const projects = [
    {
      id: 4,
      title: "BookBites",
      year: "2024",
      image: "bookbites",
      link: "https://github.com/kabirarshafidz/bookbites.git",
    },
    {
      id: 3,
      title: "Xchainge",
      year: "2024",
      image: "xchainge",
      link: "https://github.com/kabirarshafidz/xchainge.git",
    },
    {
      id: 2,
      title: "thREAD.ing",
      year: "2024",
      image: "threading",
      link: "https://github.com/kabirarshafidz/thread.ing.git",
    },
    {
      id: 1,
      title: "Lead'Or",
      year: "2023",
      image: "leador",
      link: "https://github.com/kabirarshafidz/leador.git",
    },
  ];

  const [image, setImage] = useState("");
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  function handleHover(id: number) {
    const imageId = projects.findIndex((project) => project.id === id);
    setImage(projects[imageId].image);
    setHovered(true);
  }
  function handleUnhover() {
    setImage("");
    setHovered(false);
  }
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
        <div className="h-2/3 w-3/4 grid lg:grid-cols-2 grid-cols-1 mb-16 pb-16">
          <div
            className={`app-logo ${
              hovered ? "slide-animation" : ""
            } -z-10 hidden lg:block`}
            style={{
              backgroundImage: `url(/${image}.svg)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              // display: hovered ? "inline" : "none",
            }}
          />
          {/* <div style={{ display: hovered ? "none" : "inline" }}></div> */}
          <div className="border lg:rounded-r-3xl lg:rounded-none rounded-3xl z-10">
            <div className="flex justify-between pt-8 text-3xl font-bold pb-6 border-b-2 mx-8 px-4 sm:px-8">
              <h1>PROJECTS</h1>
              <h1>{projects.length}</h1>
            </div>
            <ul>
              {projects.map((project) => (
                <List
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  year={project.year}
                  link={project.link}
                  onHover={handleHover}
                  onUnhover={handleUnhover}
                />
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
