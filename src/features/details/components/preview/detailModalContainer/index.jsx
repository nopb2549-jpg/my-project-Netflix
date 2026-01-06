
import MovieDetail from "./MovieDetail";
import Episode from "./episodeContainer";
import Card from "../../../card/card"
import { movieDetailData } from "../../../data/movieDetail/movie1";

export default function DetailModalContainer() {
  return (
    <section>
      <MovieDetail data={movieDetailData} />
      <Episode />
      <Card />
    </section>
  );
}
