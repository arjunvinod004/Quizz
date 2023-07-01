import React, { useState } from 'react'
import Question from './Quiz/Question'
import quizData from '../../StaticData/Data'

function Home() {
    const [questions,SetQuestions]=useState(quizData)
  return (
    <main>
        <div className='container'>

        
      <h3 style={{color:'cornsilk'}}>QuizGenius
      <h6 style={{margin:'20px',width:'-500px'}}>people also Ask for?</h6>
      </h3>
      
      <section>
        {
        questions.map((question)=>{
        return(
            <Question key={question.id} {...question}/>
            )
        }
            )
        }

      </section>
      </div>
    </main>
  )
}

export default Home
