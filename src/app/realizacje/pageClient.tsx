"use client";

import React, { useState, useMemo } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import PageHeader from "@/components/PageHeader";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { carImages} from "./carImages"

type TabConfig = { key: keyof typeof carImages; label: string };

const CarGallery: React.FC<{ tabs?: TabConfig[] }> = ({
  tabs = [
    { key: "all", label: "Wyróżnione" },
    { key: "astonMartin", label: "Aston Martin" },
    { key: "audiR8", label: "Audi R8" },
    { key: "BMWM4", label: "BMW M4" },
    { key: "BMWX5", label: "BMW X5" },
    { key: "Jeep", label: "Jeep" },
    { key: "maybachS", label: "Maybach S" },
    { key: "mercedescBenzS63AMG", label: "Mercedes-Benz S63 AMG" },
    { key: "mercedesBenzS450", label: "Mercedes-Benz S450" },
    { key: "maybachS2", label: "Maybach S 2" },
  ],
}) => {
  const [activeTab, setActiveTab] = useState<keyof typeof carImages>(
    tabs[0].key
  );
  const [openLightbox, setOpenLightbox] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = useMemo(() => carImages[activeTab], [activeTab]);

  const handleImageClick = (index: number) => {
    setCurrentImageIndex(index);
    setOpenLightbox(true);
  };

  return (
    <div className="bg-background">
      <PageHeader title="Realizacje" />
      <div className="container py-6 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-10 mb-4">
          {tabs.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`rounded-md text-white cursor-pointer border border-zinc-700 px-8 py-2 transition-colors 
                ${
                  activeTab === key
                    ? "bg-primary "
                    : "bg-zinc-800 hover:bg-gray-300 hover:text-black"
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-16">
          <AnimatePresence mode="wait">
            {images.map((image, index) => (
              <motion.div
                key={image.src}
                className="cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => handleImageClick(index)}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                layout
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg"
                  width={400}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <Lightbox
          open={openLightbox}
          close={() => setOpenLightbox(false)}
          slides={images}
          index={currentImageIndex}
          plugins={[Thumbnails]}
        />
      </div>
    </div>
  );
};

export default CarGallery;
