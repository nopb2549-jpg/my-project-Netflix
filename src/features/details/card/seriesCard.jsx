export default function SeriesCard({
  image,
  year,
  rate,
  quality,
  description,
}) {
  return (
    <div className="card bg-gray-600 text-white w-72">
      {/* image */}
      <img src={image} alt="series" />

      {/* content */}
      <div className="card-body">
        <div className="p-4">
          {/* header */}
          <div className="flex flex-row-reverse justify-end items-center p-4">
            <div className="inline ml-2">{year}</div>
            <span className="border border-gray-300 px-1.5 mr-1.5 text-sm">
              {quality}
            </span>
            <span className="mr-2">
              <span className="border border-gray-300 px-1.5">
                {rate}
              </span>
            </span>
          </div>

          {/* description */}
          <p className="px-4 pb-4">
            <div>
              {description}
            </div>
          </p>
        </div>
      </div>
    </div>
  )
}
