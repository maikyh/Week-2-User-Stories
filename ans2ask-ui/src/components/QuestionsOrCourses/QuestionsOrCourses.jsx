import React from "react";
import Options from "../../utils/OptionsQC.jsx"
import Status from "../../utils/Status.jsx"
import "./QuestionsOrCourses.css";

export default function QuestionsOrCourses({selectedOption, handleSetSelectedOption}) {
  return (
    <div className="QuestionsOrCourses">
        <div className="d-flex">
            <button onClick={() => handleSetSelectedOption(1)} className={selectedOption === Options.question ? Status.active : Status.inactive}> <h4>Asked</h4> </button>
            <button onClick={() => handleSetSelectedOption(2)} className={selectedOption === Options.course ? Status.active : Status.inactive}> <h4>Answered</h4> </button>
        </div>
    </div>
  );
}
