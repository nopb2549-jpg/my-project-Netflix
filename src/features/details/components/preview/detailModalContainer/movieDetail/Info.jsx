import { Link } from "react-router-dom";

export default function DetailInfoRow({ label, items }) {
  return (
    <div className="my-1.5">
      <span>{label}: </span>
      {items.map((item, i) => (
        <Link key={i}>
          <span>
            {item}{i < items.length - 1 && ", "}
          </span>
        </Link>
      ))}
    </div>
  );
}
