import {useState, useEffect, useRef} from "react";
// import {preinit} from "react-dom";

const MainNewMovies = () => {
  const KEY = "c419c959580ade242b9ff7e6a664f241";
  const URL = "https://api.themoviedb.org/3/movie/";

  const [movies, setMovies] = useState([]);

  //영화 데이터 가져오기
  const getMovies = async () => {
    const json = await (
      await fetch(`${URL}popular?language=ko-KO&api_key=${KEY}`)
    ).json(); //axios 쓰면 json으로 변환하는 과정이 생략된다고 함
    let moviesList = json.results;
    let cutList = moviesList.splice(0, 10); // tmdb는 기본적으로 20개의 리스트를 주기 떄문에 10까지 배열 크기 다시 저장
    setMovies(cutList);
    // console.log(cutList);
  };

  //다음 버튼 클릭 시, 슬라이드
  const [currentSlide, setCurrentSlide] = useState(0);
  let posterList = document.querySelectorAll(".latest-poster");
  // let posterWrap = document.querySelector(".latest-poster-wrap");
  let posterWrapRef = useRef(null);

  const nextSlide = () => {
    // setCurrentSlide(() => {
    //   // console.log(prevIndex);
    //   currentSlide == posterList.length - 1 ? 0 : currentSlide + 1;
    //   console.log(currentSlide);
    //   posterWrap.style.transform = `translateX(-${currentSlide * 200}px)`;
    // });
    setCurrentSlide(
      currentSlide === posterList.length / 2 - 1
        ? currentSlide
        : currentSlide + 1
    );
    // posterWrap.style.transform = `translateX(-${currentSlide * 190}px)`;
    console.log(currentSlide);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 0 : currentSlide - 1);
    // posterWrap.style.transform = `translateX(-${currentSlide * 190}px)`;
    console.log(currentSlide);
  };

  useEffect(() => {
    getMovies();
    posterWrapRef.current.style.transform = `translateX(-${
      currentSlide * 192
    }px)`;
  }, [currentSlide]);
  return (
    <section className="main-latest-movies">
      <div className="bg-black"></div>
      <div className="latest-movies-container">
        <div className="latest-movies-top">
          <h2>Latest Movies</h2>
          <div className="btn-wrap">
            <button
              className={"prev-btn " + (currentSlide === 0 ? "" : "active")}
              onClick={prevSlide}
              style={{cursor: currentSlide === 0 ? "default" : "pointer"}}>
              <span></span>
            </button>
            <button
              className={"next-btn " + (currentSlide === 4 ? "" : "active")}
              onClick={nextSlide}
              style={{cursor: currentSlide === 4 ? "default" : "pointer"}}>
              <span></span>
            </button>
          </div>
        </div>
        <div className="latest-movies-btm">
          <div className="latest-poster-wrap" ref={posterWrapRef}>
            {movies.map((movie) => (
              <div key={movie.id} className="latest-poster">
                <img
                  src={"https://image.tmdb.org/t/p/w780" + movie.poster_path}
                  alt={movie.title}
                />
                <div className="desc">
                  <span>{movie.title}</span>
                  <span>{movie.release_date}</span>
                </div>
              </div>
              // <Movie
              //   key={movie.id}
              //   poster_path={movie.poster_path}
              //   title={movie.title}
              //   overview={movie.overview}
              //   genre_ids={movie.genre_ids}
              // />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainNewMovies;
