import React from "react";
import { useState, useEffect, Suspense } from "react";
import Options from "../../utils/OptionsQA.jsx"
import PersonalizedFallback from "../PersonalizedFallback/PersonalizedFallback.jsx";
import "./UserProfileGrid.css";

const LazyQuestion = React.lazy(() => import('../Question/Question'));

const url = `http://localhost:3001`;

const MAX_TIME = 600000; //10 minutes

const UserProfileGrid = ({ selectedOption, userId }) => {
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);

    const removeQuestionsFromLocalStorage = () => {
        localStorage.removeItem('questions');
    };

    const removeAnswersFromLocalStorage = () => {
        localStorage.removeItem('answers');
    };

    //For Questions
    useEffect(() => {
        const cachedQuestions = localStorage.getItem('questions');
        if(cachedQuestions && cachedQuestions.length > 2) { // 2 == nothing in localStorage
          setQuestions(JSON.parse(cachedQuestions));
        }
        else{
          const fetchQuestions = async () => {
            const response = await fetch(url + '/questions');
            const data = await response.json();
            setQuestions(data);
          };
      
          fetchQuestions();
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem('questions', JSON.stringify(questions));
        const timer = setTimeout(() => removeQuestionsFromLocalStorage(), MAX_TIME);
        return () => clearTimeout(timer);
    }, [questions])

    //For Answers
    useEffect(() => {
        const cachedAnswers = localStorage.getItem('answers');
        if(cachedAnswers && cachedAnswers.length > 2) { // 2 == nothing in localStorage
          setAnswers(JSON.parse(cachedAnswers));
        }
        else{
            const fetchAnswers = async () => {
                const response = await fetch(url + '/answers');
                const data = await response.json();
                setAnswers(data);
            };
      
            fetchAnswers();
        }
    }, []);
    
    useEffect(() => {
        localStorage.setItem('answers', JSON.stringify(answers));
        const timer = setTimeout(() => removeAnswersFromLocalStorage(), MAX_TIME);
        return () => clearTimeout(timer);
    }, [answers])
    
    function getContent() {
        if(selectedOption === Options.questions) return questions.filter(question => question.user.id === userId);
        
        let UserAnswers = [];
        let AnswersOfUser = answers.filter(answer => answer.user.id === userId);
        for(let i = 0; i<questions.length; i++){
            for(let j = 0; j<AnswersOfUser.length; j++){
                if(questions[i].id === AnswersOfUser[j].questionId){
                    UserAnswers.push(questions[i]);
                    break;
                }
            }
        }

        return UserAnswers;
    }

    let content = getContent();

    return (
        <div className="UserQuestionGrid">
            { 
                content?.map((question) => (
                <div key={question.id}>
                    <Suspense fallback={<PersonalizedFallback />}>
                        <LazyQuestion id={question.id} username={question.user.username} subject={question.subject} title={question.title} body={question.body} coins={question.coins} />
                    </Suspense>
                </div>
                ))
            }
        </div>
    );
}

export default UserProfileGrid;