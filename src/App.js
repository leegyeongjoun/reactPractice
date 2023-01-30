import './App.css';
import React, {useState} from "react" //useState쓰려면 적어줘야함
import Movie from "./component/Movie"
import MovieForm from "./component/MovieForm"

function App() {
  const [movies, setMovies] = useState([
    {title:'바람과 함께...', year: 2000},
    {title:'빙의', year: 2010},
    {title:'설강', year: 2022},
  ]);

  const renderMovies = movies.map((movie)=>{
    return(
      // props를 받을 친구 이름
      // 구조분할 할당하여 내려준다.
      // 반복해서 나오는 친구에 key값
      <Movie movie={movie} key={movie.id}/>
    )
  })
  const addMovie = (movie) => {
    setMovies([
      ...movies,
      movie
    ])
  }
  return (
    <div className="App">
      <h1>영화 제목</h1>
      {/* 버튼을 클릭하면 onSubmit가 실행됨 */}
      <MovieForm addMovie={addMovie}/>
      {renderMovies}
    </div>
  )
}

export default App;
