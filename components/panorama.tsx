'use client'
import dynamic from "next/dynamic";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import { Image } from '../models';

const ReactPhotoSphereViewer = dynamic(
  () =>
    import("react-photo-sphere-viewer").then(
      (mod) => mod.ReactPhotoSphereViewer
    ),
  {
    ssr: false,
  }
);

export default function Panorama({ images }: { images: Image[] }) {
  const panoramas1 = [
    { src: "./cdn/panorama1.jpg", alt: "Nascer do sol" },
    { src: "./cdn/panorama2.jpg", alt: "Pôr do sol" },
  ];

  const panoramas = images.map((img) => ({
    alt: img.altText,
    src: `/api/cdn?imageUrl=${img.mediaItemUrl}`,
  })).sort((a, b) => a.alt > b.alt ? 1 : -1);

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
      <nav className="text-center uppercase hidden">
        {panoramas.map((panorama, i) => (
            <a href="#" className="px-7 py-7 inline-block" onClick={(e) => clickCurrent(e, i)} key={uuidv4()}>
                <span className={i === current ? 'border-b border-midnight-300' : ''}>{panorama.alt}</span>
            </a>
        ))}
      </nav>
    </div>
  );
}
