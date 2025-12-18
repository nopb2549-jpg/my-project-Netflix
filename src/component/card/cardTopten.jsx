// features/home/TopTenCard.jsx
export default function TopTenCard({ item }) {
  if (!item) return null;

  return (
    <div className="relative overflow-visible group">
      <div className="relative w-xs h-xs flex justify-center items-center overflow-visible">

        {/* เลขอันดับ (อยู่นิ่ง) */}
        <div className="absolute -left-4 -top-6 w-[45%] z-0 pointer-events-none">
          <img
            src={item.imgN}
            alt="number"
            className="w-full h-full"
          />
        </div>

        {/* การ์ดหนัง (ขยับเฉพาะอันนี้) */}
        <div
          className="
            relative
            w-[40%]
            z-10
            transition-transform duration-300 ease-out
            group-hover:scale-110
            group-hover:-translate-y-2
          "
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-full object-cover rounded-md cursor-pointer shadow-xl"
          />
        </div>

      </div>
    </div>
  );
}
