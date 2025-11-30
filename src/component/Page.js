import { useState } from 'react';
import "../page.css";
const Page = ({quizes=[],onFinish,onScore,score}) => {
    const handleClick=(idx)=>{
    if(idx+1 === quizes[current].correct){
      //점수를 +20
      onScore(20);
    }
    if( current+1 < quizes.length){
    setCurrent(current+1);}else{
      onFinish(true);
    }
  }  
  const [current,setCurrent] = useState(0);
  return (
    <div id="Quizepage">
      <div className='Q'>
        <h3>Question</h3>
        <p>Score : {score}</p>
      </div>
      <p>{quizes[current].question}</p>
      <ul className="choices">
        {
          quizes[current].choices.map((item,idx)=>{
            return(
              <li key={idx} onClick={()=>{handleClick(idx)}}>{idx+1}.{item}</li>
            )
          })
        }
      </ul>
    </div>
  )};

export default Page;