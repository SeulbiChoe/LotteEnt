import MainLatestNews from "./MainLatestNews";
import MainNewMovies from "./MainNewMovies";
import MainSlideMovies from "./MainSlideMovies";

const Main = () => {
  return (
    <>
      <MainSlideMovies></MainSlideMovies>
      <MainNewMovies></MainNewMovies>
      <MainLatestNews></MainLatestNews>
    </>
  );
};

export default Main;
