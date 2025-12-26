
import MovieDetail from "./MovieDetail";
import Episode from "./episodeContainer";
import { movieDetailData } from "../../../data/movieDetail/movie1";

export default function DetailModalContainer() {
  return (
    <section>
      <MovieDetail data={movieDetailData} />
      <Episode />
    </section>
  );
}
