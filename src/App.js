import { useState } from "react";
import "./App.css"
import Quiz from "./component/Quiz";
import quizData from "./data/quizData.json";
import Page from"./component/Page";
import Result from "./component/Result";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBatteryFull } from "@fortawesome/free-solid-svg-icons";
import { faSignal } from "@fortawesome/free-solid-svg-icons/faSignal";
const App =()=> {
  const [category,setCategory] = useState('');  
  const [filterQuiz,setfilterQuiz] = useState([]);
  const[finish,setFinish] = useState(false);
  const[score,setScore] =useState(0);
  const [isSlidDown, setIsSlidDown] = useState(false);
  const onSelectCategory = (select) => {
  // 1) 먼저 슬라이드 다운 트리거
  setIsSlidDown(true);

  // 2) 애니메이션 끝나는 타이밍 이후에 카테고리/퀴즈 세팅
  setTimeout(() => {
    setCategory(select);

    const quizes = quizData.quizzes.filter((data) => {
      return data.category === select;
    });
    setfilterQuiz(quizes);
  }, 600); // CSS transition 시간과 맞추기 (0.6s면 600)
};
  const handleRestart =()=>{
    setCategory('');
    setFinish(false);
    setScore(0);
    setIsSlidDown(false);
  }
  const handleScore =()=>{
    //이전에 가진 값에 +20
    setScore((prev)=>{return prev+20});
  }
  return (
    <div id="App">
      <div className="card">
        <div className="blur">
          <div className="top">
            <h1>Content <span>Quiz!</span></h1>
            <div className="icon">
              <FontAwesomeIcon icon={faSignal} size="24px"/>
              <FontAwesomeIcon icon={faBatteryFull} size="24px"/>
            </div>
          </div>
              <h3>좋아하는 콘텐츠를 선택하세요.</h3>         
        </div>
            {
            !finish &&
            <Quiz list={quizData.categories} onSelect={onSelectCategory} isSlidDown={isSlidDown}/>
            }
        
        
      {
        category && !finish && 
        <Page quizes={filterQuiz} onFinish={setFinish} onScore={handleScore} score={score}/>
      }
      {
      finish && <Result onRestart={handleRestart} score={score}/>
      }
      </div>
    </div>
  );
}

export default App;