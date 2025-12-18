export default function SliderRow({ data, renderItem }) {
  return (
    // กำหนดแถว card
    <>
      {data.map((item) => (
        <div
          key={item.id}
          className="relative overflow-visible transition duration-300
                     hover:z-100 hover:scale-110 hover:translate-y-6"
        >
          {renderItem(item)}
        </div>
      ))}
    </>
  );
}
