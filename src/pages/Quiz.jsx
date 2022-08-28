import { useState } from "react";
import db from "../database/quizQuestions.json";



function Quiz() {

    document.title = "Triangles | Quiz";

    const [score, setScore] = useState(0);

    const scoreBoardStyle = {
        justifyContent: "space-between"
    }

    function optionCheck(option, answer, marks){
        if (option === answer){
            setScore(score + Number(marks))
            return true
        } else {
            return false
        }
    }

    return ( 
        <>
            <div className="container-center section-base flex" style={scoreBoardStyle} >
                <h3>A small quiz on triangles</h3>
                <h3>Score: {score}</h3>
            </div>
            <div className="container-center section-base">
                {db.questions.map((question, index) => {
                    return <div className="container-center section-base grid question">
                        <h1>{question.q}</h1>
                        <p>Marks: {question.marks}</p>
                        <form className="container-center section-base grid question-options" 
                            onChange={(e)=> optionCheck(e.target.value, question.a, question.marks)}
                            >
                            {question.options.map(option => <>
                                <input type="radio" name={index} id={`${option}-${index}`} 
                                className="d-none"
                                value={option}  
                                />
                                <label
                                htmlFor={`${option}-${index}`} 
                                className="question-option section-offwhite"
                                onClick={(e)=> {
                                    question.a === e.target.innerText ? e.target.classList.add("correct") : e.target.classList.add("wrong");
                                } }
                                >{option}</label>
                            </>)}
                        </form>
                    </div>
                })}
            </div>
        </>
     );
}

export default Quiz;