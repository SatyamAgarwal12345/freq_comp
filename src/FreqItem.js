import React,{useState,useEffect} from 'react'

const FreqItem = ({faqs,index}) => {
    const [isShow,setIsShow] = useState(false)
    function displayHandler(){
        setIsShow(!isShow)
    }
    useEffect(()=>{ 
        if(index==0) setIsShow(true)
    },[])
  return (
    <div className="container">
        <button className={isShow?"rotate":""} onClick={displayHandler}>^</button>
          <div className="question">{faqs.question}</div>
         {isShow  && <div className="answer">{faqs.answer}</div>} 
    </div>
  )
}

export default FreqItem