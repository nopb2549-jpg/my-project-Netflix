import IconGroup from "../../../../icons/iconGroup";

export default function Meta({ year, season, age, tags }) {
    
  return (
    <>
      <div className="flex items-center text-xl">
        <span className="mr-2">{year}</span>
        <span className="mr-2">{season}</span>
        <span className="mr-2"> <IconGroup /> </span>
      </div>

      <div className="mt-2">
        <span className="border px-2">{age} +</span>
        <span className="ml-2">{tags}</span>
      </div>
    </>
  );
}
