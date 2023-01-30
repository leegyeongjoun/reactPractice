import React, {useState, useRef, useEffect} from "react" //useState쓰려면 적어줘야함

// app에있는 것을 받아오려면 addMovie
function MovieForm({addMovie}) {
  // useRef 사용하면 current
  const inputRef=useRef();
  // console.log(inputRef);
  // 내가 정해준 이름과 바뀔 값
  const [movieTitle, setMovieTitle] = useState("");
  const [movieYear, setMovieYear] = useState("");
  //변경될 때마다    
  const [titleError, setTitleError] = useState('');
  const [yearError, setYearError] = useState('');

  //시작하자마자 포커스가 되려면
  useEffect(()=>{
    inputRef.current.focus();
  }, []);

  const vaildateForm = ()=>{
    resetErrors();
    let validated = true;
    if(!movieTitle){//movieTitle값이 없으면
        setTitleError('영화제목 넣어주세요');
        validated = false;
    }
    if(!movieYear){//movieTitle값이 없으면
        setYearError('개봉년도 넣어주세요');
        validated = false;
    }
    return validated
  }

  //다적고 버튼을 누르면 빈칸이 나오게 하기 위해
  const resetForm=()=>{
    setMovieTitle('');
    setMovieYear('');
  }

  const resetErrors = ()=>{
    setTitleError('');
    setYearError('');
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if(vaildateForm()){//vaildateForm가 참이면
        addMovie({
            id:Date.now(),
            title: movieTitle,
            year: movieYear
        })
    }
    resetForm();
    inputRef.current.focus();
  }
  return (
      <form onSubmit={onSubmit}>
        {/* 버튼을 클릭하면 onSubmit가 실행됨 */}
        {/* input 태그는 값이 바뀔 때 onChnage */}
        <input ref={inputRef} type="text" placeholder='영화제목을 쓰세요' value={movieTitle} onChange={e => setMovieTitle(e.target.value)}/><br />
        <div className="err">{titleError}</div>
        <input type="text" placeholder='개봉년도를 쓰세요' value={movieYear} onChange={e => setMovieYear(e.target.value)}/><br />
        <div className="err">{yearError}</div>
        <button className='btn' type='submit'>영화추가</button>
      </form>
  )
}

export default MovieForm;
