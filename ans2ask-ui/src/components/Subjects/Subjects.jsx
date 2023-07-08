import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faSquareRootAlt, faCode, faMicroscope, faHeartbeat, faPalette, faChartLine, faBalanceScale, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faGamepad, faScroll, faFlask, faBolt, faFilm, faGlobeAmericas, faBook, faUtensils, faLanguage } from "@fortawesome/free-solid-svg-icons";
import "./Subjects.css";

export default function Subjects() {
  return (
    <div className="subjects">
      <div className="row justify-content-center mt-2 mb-2">
        <div className="col-auto d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faBrain} />
          <p className="text-center">All</p>
        </div>
        <div className="col-auto d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faCode} />
          <p className="text-center">Informatics</p>
        </div>
        <div className="col-auto d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faSquareRootAlt} />
          <p className="text-center">Mathematics</p>
        </div>
        <div className="col-auto d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faMicroscope} />
          <p className="text-center">Biology</p>
        </div>
        <div className="col-auto d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faHeartbeat} />
          <p className="text-center">Health</p>
        </div>
        <div className="col-auto d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faPalette} />
          <p className="text-center">Art</p>
        </div>
        <div className="col-auto d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faChartLine} />
          <p className="text-center">Business</p>
        </div>
        <div className="col-auto d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faBalanceScale} />
          <p className="text-center">Law</p>
        </div>
        <div className="col-auto d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faDollarSign} />
          <p className="text-center">Investment</p>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-auto d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faScroll} />
          <p className="text-center">History</p>
        </div>
        <div className="col-auto d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faGamepad} />
          <p className="text-center">Videogames</p>
        </div>        
        <div className="col-auto d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faFlask} />
          <p className="text-center">Chemistry</p>
        </div>
        <div className="col-auto d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faBolt} />
          <p className="text-center">Physics</p>
        </div>
        <div className="col-auto d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faFilm} />
          <p className="text-center">Animation</p>
        </div>
        <div className="col-auto d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faGlobeAmericas} />
          <p className="text-center">Geography</p>
        </div>
        <div className="col-auto d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faBook} />
          <p className="text-center">SAT</p>
        </div>
        <div className="col-auto d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faUtensils} />
          <p className="text-center">Food</p>
        </div>
        <div className="col-auto d-flex flex-column align-items-center">
          <FontAwesomeIcon icon={faLanguage} />
          <p className="text-center">Languages</p>
        </div>
      </div>

      <div className="row border border-dark my-4"></div>
      
      <h1 className="text-center mb-2 fw-bold">Subject</h1>
    </div>
  );
}
