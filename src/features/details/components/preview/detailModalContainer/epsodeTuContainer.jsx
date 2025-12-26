export default function EpisodeTuContainer({ season }) {
  if (!season) return null;

  return (
    <div>
      {/* ===== ข้อมูลคร่าว ๆ ของ SS ===== */}
      <div className="mb-4">
        <span className="mr-2">{season.label}</span>
        <span className="border px-1.5">{season.age}</span>
        <span className="ml-2">{season.category}</span>
      </div>

      {/* ===== Episode list ===== */}
      {season.episodes.map((ep) => (
        <div
          key={ep.ep}
          className="w-full p-4 border-b-2 border-gray-700"
        >
          <div
            role="button"
            tabIndex={0}
            className="flex items-center cursor-pointer"
          >
            {/* เลขตอน */}
            <div className="text-lg font-semibold text-gray-300 w-6 text-center">
              {ep.ep}
            </div>

            {/* รูป */}
            <div className="w-40 aspect-video shrink-0 overflow-hidden rounded">
              <img
                src={ep.thumbnail}
                alt={ep.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* ข้อมูล */}
            <div className="flex-1">
              <div className="flex justify-between px-2 pt-2 pb-1">
                <span className="font-medium">{ep.title}</span>
                <span className="text-sm text-gray-400">
                  {ep.duration}
                </span>
              </div>

              <p className="px-2 pb-3 text-sm text-gray-400 leading-relaxed">
                {ep.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}