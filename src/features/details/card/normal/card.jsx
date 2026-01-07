import SeriesCard from "./seriesCard"
import seriesList from "../../data/seriesList/card1"

export default function CardCollection() {
  return (
    <div>
      <p className="flex justify-stard items-end mt-12 mb-5 gap-3 text-3xl">
        <svg viewBox="0 0 24 24" width="35" height="35" data-icon="CollectionMedium" data-icon-id=":r47:" aria-hidden="true" class="title-group-collection" xmlns="http://www.w3.org/2000/svg" fill="none" role="img">
          <path fill="currentColor" fill-rule="evenodd" d="M2 3a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h20a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm0 2h20v14H2zm3 2v10h2V7zm4 10V7h2v10zm4.07-9.63 4 10 1.86-.74-4-10z" clip-rule="evenodd"></path>
        </svg>
        คอลเลกชันสเตรนเจอร์ ธิงส์
      </p>

      {/* <div className="flex justify-center"> */}
        {/* <div className="w-[50%]"> */}
          <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(18rem,18rem))]">
            {seriesList.map((item, index) => (
              <SeriesCard key={index} {...item} />
            ))}
          </div>
        </div>
      // </div>
    // </div>
  )
}
