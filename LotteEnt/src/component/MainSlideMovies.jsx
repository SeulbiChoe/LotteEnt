import {useState, useEffect} from "react";

const MainSlideMovies = () => {
  const KEY = "c419c959580ade242b9ff7e6a664f241";
  const URL = "https://api.themoviedb.org/3/movie/";

  const [movies, setMovies] = useState([]);

  //영화 데이터 가져오기
  const getMovies = async () => {
    const json = await (
      await fetch(`${URL}upcoming?language=ko-KO&api_key=${KEY}`)
    ).json(); //axios 쓰면 json으로 변환하는 과정이 생략된다고 함
    let moviesList = json.results;
    let cutList = moviesList.splice(0, 5); // tmdb는 기본적으로 20개의 리스트를 주기 떄문에 10까지 배열 크기 다시 저장

    setMovies(cutList);
    // console.log(cutList);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <section className="main-slide-movies">
      <div className="slide-movies-top">
        <h2>
          Global contents company
          <span>LOTTE ENTERTAINMENT</span>
        </h2>
      </div>
      <div className="slide-movies-bottom">
        <div className="slide-wrap">
          {movies.map((movie) => (
            <a href="" key={movie.id}>
              <div className="slide-item">
                <img
                  src={"https://image.tmdb.org/t/p/w1280" + movie.backdrop_path}
                  alt={movie.title}
                />
                <div className="slide-txt">
                  <p className="movie-title">{movie.title}</p>
                  <p className="movie-overview">{movie.overview}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div className="numbering">
          <span></span>
        </div>
        <div className="btn-wrap">
          <button className="prev-btn">
            <span></span>
          </button>
          <button className="next-btn">
            <span></span>
          </button>
        </div>
      </div>
    </section>
  );
};
export default MainSlideMovies;
