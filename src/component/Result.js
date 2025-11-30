import React from 'react'

const Result = ({onRestart,score}) => {
  
  return (
    <div id='end'>
            <h1><span>{score}</span>점 입니다</h1>
            <button onClick={onRestart}>처음으로</button>
    </div>
  )
}

export default Result