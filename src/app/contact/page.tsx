// import Image from "next/image";
// import Header from "./../../components/Header";

// export default function Contact() {
//   return (
//     <div className="flex flex-col h-screen">
//       <Header />
//       <div className="grow flex items-center justify-center text-center">
//         <div className="w-full mx-48 pb-80">
//           <div className="border-b-2 flex justify-between">
//             <h1 className="page-title !text-5xl">CONTACT</h1>
//             <div></div>
//           </div>
//           <div className="grid grid-cols-2 mt-6 text-2xl">
//             <div className="flex gap-3">
//               <p>MAIL:</p>
//               <a href="mailto:hafidzarsha@gmail.com">
//                 <p className="hover:border-b-2">hafidzarsha@gmail.com</p>
//               </a>
//             </div>
//             <div className="flex gap-3">
//               <p>SOCIAL MEDIA:</p>
//               <div className="flex flex-col gap-2">
//                 <a
//                   href="https://instagram.com/arshafka"
//                   className="hover:border-b-2  w-min"
//                 >
//                   <p>Instagram</p>
//                 </a>
//                 <a
//                   href="https://linkedin.com/in/hafidzarshakabira"
//                   className="hover:border-b-2 w-min"
//                 >
//                   <p>Linkedin</p>
//                 </a>
//                 <a
//                   href="https://github.com/kabirarshafidz"
//                   className="hover:border-b-2  w-min"
//                 >
//                   <p>Github</p>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import Header from "./../../components/Header";
import { useState } from "react";

export default function Home() {
  const [clicked, setClicked] = useState(false);

  function handleClick() {
    setClicked(!clicked);
  }
  return (
    <div className="relative h-screen">
      <Header onHomeClicked={handleClick} />
      <main
        className={`flex flex-col h-full ${clicked ? `fade-out` : "fade-in"}`}
      >
        <div className="grow flex items-center justify-center text-center">
          <div className="w-full mx-48 pb-80">
            {/* Page Content */}
            <div className="border-b-2 flex justify-between">
              <h1 className="page-title !text-5xl">CONTACT</h1>
              <div></div>
            </div>
            <div className="grid grid-cols-2 mt-6 text-2xl">
              <div className="flex gap-3">
                <p>MAIL:</p>
                <a href="mailto:hafidzarsha@gmail.com">
                  <p className="border-animation">hafidzarsha@gmail.com</p>
                </a>
              </div>
              <div className="flex gap-3">
                <p>SOCIAL MEDIA:</p>
                <div className="flex flex-col gap-2">
                  <a
                    href="https://instagram.com/arshafka"
                    className="border-animation  w-min"
                  >
                    <p>Instagram</p>
                  </a>
                  <a
                    href="https://linkedin.com/in/hafidzarshakabira"
                    className="border-animation w-min"
                  >
                    <p>Linkedin</p>
                  </a>
                  <a
                    href="https://github.com/kabirarshafidz"
                    className="border-animation w-min"
                  >
                    <p>Github</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
