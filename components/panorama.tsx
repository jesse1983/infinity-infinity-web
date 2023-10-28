'use client'
import dynamic from "next/dynamic";
import { useState } from "react";

export default function Panorama() {
  const panoramas = [
    { src: "./panorama1.jpg", alt: "Nascer do sol" },
    { src: "./panorama2.jpg", alt: "Pôr do sol" },
  ];
  const ReactPhotoSphereViewer = dynamic(
    () =>
      import("react-photo-sphere-viewer").then(
        (mod) => mod.ReactPhotoSphereViewer
      ),
    {
      ssr: false,
    }
  );

  const [current, setCurrent] = useState(0);
  const clickCurrent = (ev, i) => {
    ev.preventDefault();
    setCurrent(i);
  }

  return (
    <div>
      {panoramas.map((panorama, i) => (
        <div key={panorama.alt} className={i === current ? '' : 'hidden'}>
          <ReactPhotoSphereViewer
            src={panorama.src}
            height={"75vh"}
            width={"100%"}
            mousewheel={false}
            container={""}
          />
        </div>
      ))}
      <nav className="text-center uppercase">
        {panoramas.map((panorama, i) => (
            <a href="#" className="px-7 py-7 inline-block" onClick={(e) => clickCurrent(e, i)}>
                <span className={i === current ? 'border-b border-midnight-300' : ''}>{panorama.alt}</span>
            </a>
        ))}
      </nav>
    </div>
  );
}
