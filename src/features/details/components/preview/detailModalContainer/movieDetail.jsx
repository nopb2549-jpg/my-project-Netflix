import DetailLayout from "./movieDetail/DetailLayout";
import Meta from "./movieDetail/Meta";
import Description from "./movieDetail/Description";
import DetailInfoRow from "./movieDetail/Info";

export default function MovieDetail({ data }) {
  if (!data) return null;

  return (
    <DetailLayout
      left={
        <>
          <Meta
            year={data.year}
            season={data.season}
            age={data.age}
            tags={data.tags}
          />

          <div className="my-4 text-xl">
            {data.releaseText}
          </div>

          <Description text={data.description} />
        </>
      }
      right={
        <>
          <DetailInfoRow label="นักแสดง" items={data.cast} />
          <DetailInfoRow label="แนว" items={data.genre} />
          <DetailInfoRow label="รายการนี้" items={data.mood} />
        </>
      }
    />
  );
}
