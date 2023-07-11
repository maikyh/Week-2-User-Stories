import React from "react";  
import { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./Question.css";

const url = `http://localhost:3001`;

/*
<div className="answer">
  {answersToThisQuestion?.map((answer) => (
      <div key={answer.id}>
        {answer.body}
      </div>
    ))
  }
</div>
*/

export default function Question({id, username, subject, title, body}) {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const fetchAnswers = async () => {
      const response = await fetch(url + '/answers');
      const data = await response.json();
      setAnswers(data);
    };

    fetchAnswers();
  }, []);

  const answersToThisQuestion = answers.filter(answer => answer.id === id);
  console.log(answersToThisQuestion);

  return (
    <div className="question">
      <div className="question-card bg-white mt-4 p-3">
        <div className="row">
          <div className="col-auto">
            <FontAwesomeIcon icon={faUser} />
          </div>

          <div className="col-auto">
            <h6 className="mt-1"> {username} </h6>
          </div>

          <div className="col-auto"> <h6 className="mt-1"> - </h6> </div>

          <div className="col-auto">
            <h6 className="mt-1"> {subject} </h6>
          </div>
          <div>

          </div>
        </div>
        <div>
          <span className="fw-bold">{title}</span>
        </div>
        <div className="">
          <p> {body} </p>
        </div>
      </div>
    </div>
  );
}