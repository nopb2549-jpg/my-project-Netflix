// features/home/TopTenSlider.jsx
import { useEffect, useState } from "react";
import { Topten } from "../../data/topten";
import TopTenCard from "../../component/card/cardTopten";
import ControlsPrev from "./ControlsPrev";
import ControlsNext from "./ControlsNext";

export default function TopTenSlider() {
  const CARD_WIDTH = 200;
  const VISIBLE = 5;

  // 🔁 clone data
  const loopData = [
    ...Topten.slice(-VISIBLE),
    ...Topten,
    ...Topten.slice(0, VISIBLE),
  ];

  const [index, setIndex] = useState(VISIBLE);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isTransition, setIsTransition] = useState(true);

  // เปิด transition หลัง jump
  useEffect(() => {
    if (!isTransition) {
      requestAnimationFrame(() => {
        setIsTransition(true);
      });
    }
  }, [isTransition]);

  const next = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((i) => i + 1);
  };

  const prev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIndex((i) => i - 1);
  };

  return (
    <div className="slider w-full flex flex-col mt-8 mb-8">

      {/* <div className="pl-[5%] mb-3">
        <p className="text-white">
          รายการทีวี 10 อันดับสูงสุดในไทยวันนี้
        </p>
      </div> */}

      <div className="flex items-center gap-4">

        <ControlsPrev onPrev={prev} />

        <div className="overflow-hidden w-full relative">
          <div
            className={`
              flex gap-4
              ${isTransition ? "transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]" : ""}
            `}
            style={{
              transform: `translateX(-${index * CARD_WIDTH}px)`,
            }}
            onTransitionEnd={() => {
              setIsAnimating(false);

              // ชนซ้าย
              if (index === 0) {
                setIsTransition(false);
                setIndex(Topten.length);
                return;
              }

              // ชนขวา
              if (index === Topten.length + VISIBLE) {
                setIsTransition(false);
                setIndex(VISIBLE);
                return;
              }
            }}
          >
            {loopData.map((item, i) => (
              <TopTenCard key={`${item.id}-${i}`} item={item} />
            ))}
          </div>
        </div>

        <ControlsNext onNext={next} />

      </div>
    </div>
  );
}
