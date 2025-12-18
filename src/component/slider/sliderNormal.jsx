import { useEffect, useState } from "react";
import SliderTemplate from "./sliderTemplate";
import SliderRow from "./sliderRow";
import ControlsPrev from "./ControlsPrev";
import ControlsNext from "./ControlsNext";
import CardNormal from "../card/cardNormal";

export default function SliderNormal({ title, data }) {
  const visibleCards = 11;

  // const loopData = [
  //   data[data.length - 1],
  //   ...data,
  //   data[0],
  // ]; **************** ห้ามลบ

  const loopData = [
    ...data.slice(-visibleCards),
    ...data,
    ...data.slice(0, visibleCards),
  ];

  const [index, setIndex] = useState(visibleCards);//(1)
  const [isTransition, setIsTransition] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hoverID, setHoverID] = useState(null);

  // เปิด transition หลัง jump
  useEffect(() => {
    if (!isTransition) {
      requestAnimationFrame(() => {
        setIsTransition(true);
      });
    }
  }, [isTransition]);

  // v2
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
    <div className="flex flex-col">
      <p className="text-white pl-[5%]">{title}</p>

      <div className="flex items-center gap-4">
        <ControlsPrev onPrev={prev} />
        
        <SliderTemplate
          index={index}
          isTransition={isTransition}

          onTransitionEnd={() => {
            setIsAnimating(false);

            // ชนซ้าย
            if (index === 0) {
              setIsTransition(false);

              requestAnimationFrame(() => {
                setIndex(data.length);
              });
              return;
            }

            // ชนขวา
            if (index === data.length + visibleCards) {
              setIsTransition(false);

              requestAnimationFrame(() => {
                setIndex(visibleCards);
              });
              return;
            }
          }}

        >
          <SliderRow
            data={loopData}
            renderItem={(item) => (
              <CardNormal
                item={item}
                hoverID={hoverID}
                setHoverID={setHoverID}
              />
            )}
          />
        </SliderTemplate>

        <ControlsNext onNext={next} />
      </div>
    </div>
  );
}
