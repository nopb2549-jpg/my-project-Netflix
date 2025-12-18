import IconGroup from "../icons/iconGroup.jsx";

export default function CardNormal({ item, hoverID, setHoverID }) {
  if (!item) return null;

  const isHover = hoverID === item.id;

  return (
    <div
      className={`relative transition-transform duration-300 ${
        isHover ? "z-50" : "z-0"
      }`}
      onMouseEnter={() => setHoverID(item.id)}
      onMouseLeave={() => setHoverID(null)}
    >
      {/* IMAGE */}
      <div className="w-xs">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-40 object-cover rounded-md cursor-pointer border"
        />
      </div>

      {/* HOVER CARD */}
      <div
        className={`absolute left-0 -mt-5 w-xs bg-white rounded-b-md shadow-xl
          transition-all duration-200
          ${
            isHover
              ? "opacity-100 visible translate-y-0 pointer-events-auto"
              : "opacity-0 invisible translate-y-2 pointer-events-none"
          }
        `}
      >
        <div className="flex gap-3 p-2">
          <IconGroup />
        </div>

        {item.price && (
          <p className="px-2 pb-2 text-sm text-gray-700">{item.price}</p>
        )}
      </div>
    </div>
  );
}
