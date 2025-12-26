export default function DetailLayout({ left, right }) {
  return (
    <div className="w-full h-full grid grid-cols-[2fr_1fr] gap-8">
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}
