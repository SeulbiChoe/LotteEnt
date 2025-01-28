import {useState, useEffect, useRef} from "react";

const MainSlideMovies = () => {
  const KEY = "c419c959580ade242b9ff7e6a664f241";
  const URL = "https://api.themoviedb.org/3/movie/";

  const [movies, setMovies] = useState([]);

  //영화 데이터 가져오기
  const getMovies = async () => {
    const json = await (
      await fetch(`${URL}upcoming?language=ko-KO&api_key=${KEY}`)
    ).json();
    let moviesList = json.results;
    let cutList = moviesList.splice(0, 5);
    setMovies(cutList);
  };

  const [currentSlide, setCurrentSlide] = useState(0);
  let slideList = document.querySelectorAll(".slide-item");
  let slideWrapRef = useRef(null);
  // let imgIdx = slideList.length - 1;

  const nextSlide = () => {
    setCurrentSlide(
      currentSlide === slideList.length - 1
        ? 0
        : (currentSlide) => currentSlide + 1
    );
  };
  console.log(currentSlide);

  const prevSlide = () => {
    setCurrentSlide((currentSlide) =>
      currentSlide === 0
        ? currentSlide + slideList.length - 1
        : currentSlide - 1
    );
  };

  useEffect(() => {
    getMovies();
    // const interval = setInterval(() => {
    //   nextSlide();
    // }, 4000);

    slideWrapRef.current.style.transform = `translateX(-${
      currentSlide * 100
    }%)`;
  }, [currentSlide]);
  return (
    <section className="main-slide-movies">
      <div className="slide-movies-top">
        <h2>
          Global contents company
          <span>LOTTE ENTERTAINMENT</span>
        </h2>
      </div>
      <div className="slide-movies-bottom">
        <div className="slide-wrap" ref={slideWrapRef}>
          {movies.map((movie, idx) => (
            <a
              href=""
              key={movie.id}
              className={
                "slide-item " + (currentSlide === idx ? "active" : "")
              }>
              <div>
                <img
                  src={"https://image.tmdb.org/t/p/w1280" + movie.backdrop_path}
                  alt={movie.title}
                />
              </div>
              <div className="slide-txt">
                <p className="movie-title">{movie.title}</p>
                <p className="movie-overview">{movie.overview}</p>
              </div>
            </a>
          ))}
        </div>
        <div className="numbering">
          <span></span>
        </div>
        <div className="btn-wrap">
          <button className="prev-btn" onClick={prevSlide}>
            <span></span>
          </button>
          <button className="next-btn" onClick={nextSlide}>
            <span></span>
          </button>
        </div>
      </div>
    </section>
  );
};
export default MainSlideMovies;
