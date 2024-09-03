// "use client";
// import { useState } from "react";

// export default function Header() {
//   const [showMenu, setShowMenu] = useState(false);

//   return (
//     <div
//       className="pt-16 flex flex-col"
//       style={{ height: showMenu ? "100vh" : "" }}
//     >
//       <header className="mx-24 flex justify-between">
//         <div>
//           <a href="/">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               height="48px"
//               viewBox="0 -960 960 960"
//               width="48px"
//               fill="#e6f4eb"
//             >
//               <path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z" />
//             </svg>
//           </a>
//         </div>
//         <div>
//           <button onClick={() => setShowMenu(!showMenu)}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               height="48px"
//               viewBox="0 -960 960 960"
//               width="48px"
//               fill="#e6f4eb"
//             >
//               <path d="M144-264v-72h672v72H144Zm0-180v-72h672v72H144Zm0-180v-72h672v72H144Z" />
//             </svg>
//           </button>
//         </div>
//       </header>
//       {showMenu && (
//         <div className="h-full flex items-center justify-center text-center  pb-16">
//           <div className="pr-48 text-6xl flex flex-col gap-16">
//             <div className="flex items-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 height="3rem"
//                 viewBox="0 -960 960 960"
//                 width="3rem"
//                 fill="#e8eaed"
//               >
//                 <path d="m242-200 210-280-210-280h74l210 280-210 280h-74Zm252 0 210-280-210-280h74l210 280-210 280h-74Z" />
//               </svg>
//               <a href="/" className="border-b-2 flex justify-between w-max">
//                 <h1>HOME</h1>
//                 <div></div>
//               </a>
//             </div>
//             <div className="flex items-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 height="3rem"
//                 viewBox="0 -960 960 960"
//                 width="3rem"
//                 fill="#e8eaed"
//               >
//                 <path d="m242-200 210-280-210-280h74l210 280-210 280h-74Zm252 0 210-280-210-280h74l210 280-210 280h-74Z" />
//               </svg>
//               <a
//                 href="/projects"
//                 className="border-b-2 flex justify-between w-max"
//               >
//                 <h1>PROJECT GALLERY</h1>
//                 <div></div>
//               </a>
//             </div>
//             <div className="flex items-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 height="3rem"
//                 viewBox="0 -960 960 960"
//                 width="3rem"
//                 fill="#e8eaed"
//               >
//                 <path d="m242-200 210-280-210-280h74l210 280-210 280h-74Zm252 0 210-280-210-280h74l210 280-210 280h-74Z" />
//               </svg>
//               <a
//                 href="/about"
//                 className="border-b-2 flex justify-between w-max"
//               >
//                 <h1>ABOUT</h1>
//                 <div></div>
//               </a>
//             </div>
//             <div className="flex items-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 height="3rem"
//                 viewBox="0 -960 960 960"
//                 width="3rem"
//                 fill="#e8eaed"
//               >
//                 <path d="m242-200 210-280-210-280h74l210 280-210 280h-74Zm252 0 210-280-210-280h74l210 280-210 280h-74Z" />
//               </svg>
//               <a
//                 href="/contact"
//                 className="border-b-2 flex justify-between w-max"
//               >
//                 <h1>CONTACT</h1>
//                 <div></div>
//               </a>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";
import { useState } from "react";

type Props = {
  onHomeClicked: () => void;
};

export default function Header(props: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const pages = [
    { title: "HOME", path: "/" },
    { title: "PROJECT GALLERY", path: "projects" },
    { title: "ABOUT", path: "/about" },
    { title: "CONTACT", path: "/contact" },
  ];

  function handleClick() {
    setShowMenu(!showMenu);
    props.onHomeClicked();
  }

  return (
    <div className="pt-12 md:pt-16 flex flex-col relative">
      <nav className="mx-16 md:mx-24 flex justify-between z-30">
        <div className="transition duration-300 ease-in-out hover:scale-110 ">
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 -960 960 960"
              width="48px"
              fill="#e6f4eb"
              className="size-8 lg:size-12"
            >
              <path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z" />
            </svg>
          </a>
        </div>
        <div className="transition duration-300 ease-in-out hover:scale-110">
          <button onClick={handleClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 -960 960 960"
              width="48px"
              fill="#e6f4eb"
              className="size-8 lg:size-12"
            >
              <path d="M144-264v-72h672v72H144Zm0-180v-72h672v72H144Zm0-180v-72h672v72H144Z" />
            </svg>
          </button>
        </div>
      </nav>
      {showMenu && (
        <div className="menu-page fixed inset-0 bg-opacity-100 flex items-center justify-center text-center z-20">
          <div
            className={`text-2xl md:text-3xl lg:text-5xl flex flex-col gap-4 md:gap-8 lg:gap-16 ${
              showMenu ? `fade-in` : "fade-out"
            }`}
          >
            {/* Menu Items */}
            {pages.map((page, index) => (
              <div key={index} className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="3rem"
                  viewBox="0 -960 960 960"
                  width="3rem"
                  fill="#e8eaed"
                >
                  <path d="m242-200 210-280-210-280h74l210 280-210 280h-74Zm252 0 210-280-210-280h74l210 280-210 280h-74Z" />
                </svg>
                <a
                  href={`${page.path}`}
                  className="flex justify-between w-max border-animation"
                  onClick={() => setShowMenu(false)}
                >
                  <h1>{page.title}</h1>
                  <div></div>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
