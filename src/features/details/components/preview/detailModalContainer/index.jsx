
import MovieDetail from "./MovieDetail";
import Episode from "./episodeContainer";
import Card from "../../../card/normal/card";
import CardTu from "../../../card/Series/card";
import { movieDetailData } from "../../../data/movieDetail/movie1";

export default function DetailModalContainer() {
  return (
    <section>
      <MovieDetail data={movieDetailData} />
      <Episode />
      <Card />
      <CardTu />
    </section>
  );
}
