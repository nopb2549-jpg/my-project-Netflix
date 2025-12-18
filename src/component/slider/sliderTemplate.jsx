export default function SliderTemplate({
  index,
  itemWidth = 240,
  children,
  isTransition = true,
  onTransitionEnd,
}) {
  return (
    //hidden
    <div className=" w-full  overflow-hidden">
      <div
        className={`flex relative overflow-visible gap-4 ${
          isTransition
            ? "transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
            : ""
        }`}
        style={{
          transform: `translateX(-${index * itemWidth}px)`,
          transition: isTransition ? 'transform 0.4s ease' : 'none',
        }}
        onTransitionEnd={onTransitionEnd}
      >
        {children}
      </div>
    </div>
  );
}
