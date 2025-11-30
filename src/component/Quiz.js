const Quiz = ({list=[],onSelect,isSlidDown}) => {
    return (
        <div id="categories">
            
                <ul className={`choice ${isSlidDown ? "choice--down" : ""}`}>
                    {
                        list.map((item,idx)=>{
                            return(
                                <li className="sliding-item" key={idx} onClick={()=>{onSelect(item)}} style={ {transitionDelay: `${idx * 0.05}s`}}>{item}</li>
                            )
                        })
                    }
                </ul>
        </div>
    )
}

export default Quiz;