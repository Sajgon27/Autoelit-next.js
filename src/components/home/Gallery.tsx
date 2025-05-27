import React from 'react';
import Image from 'next/image';

const imageColumns = [
  [
    "/images/carsGallery/aston martin dbx/2.jpg",
    "/images/carsGallery/bmw x5/1.jpg",
  ],
  [
    "/images/carsGallery/maybach s/3.jpg",
  ],
  [
    "/images/carsGallery/aston martin dbx/4.jpg",
    "/images/carsGallery/mercedes-benz s450/3.jpg",
  ],
  [
    "/images/carsGallery/jeep/1.jpg",
  ],
  [
    "/images/carsGallery/mercedes-benz s63 amg/3.jpg",
    "/images/carsGallery/maybach s 2/2.jpg",
  ],
];

export default function Gallery ()  {
  return (
    <div className="bg-[#0a0a0a] px-4 pb-4 sm:pb-20">
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4" style={{ minHeight: 300 }}>
        {imageColumns.map((col, colIdx) => (
          <div
            key={colIdx}
            className={`flex flex-col h-full max-h-[700px] ${col.length === 1 ? 'justify-center' : 'gap-4'} ${colIdx === imageColumns.length - 1 ? 'sm:flex hidden' : ''}`}
          >
            {col.map((src, imgIdx) => (
              <div
                key={imgIdx}
                className={
                  col.length === 1
                    ? "flex-1 flex items-center h-full"
                    : "flex-1 flex items-center h-1/2 max-h-[300px]"
                }
              >
                <Image
                  className="h-full w-full object-cover rounded-lg"
                  src={src}
                  alt=""
                  fill={false}
                  width={400}
                  height={300}
                  style={{ minHeight: 0 }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

