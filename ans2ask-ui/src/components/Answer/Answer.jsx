import React, {useContext} from 'react';
import { UserContext } from "../../UserContext.js";
import { Badge } from '@chakra-ui/react'
import Text from '../../utils/Text.jsx';
import Content from '../../utils/Content.jsx';
import "./Answer.css";

export default function Answer({images, answer,handleGiveThanks,user,question,thankedAnswerExist}) {
    const { darkMode } = useContext(UserContext);
    const image = images.filter(image => image.public_id === answer.user.email);

    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="d-flex justify-content-center align-items-center custom-container-question-details px-4 pt-3 pb-2" style={{ backgroundColor: darkMode ? Content.darkMode : Content.lightMode }}>
                <div style={{border: `0.5px solid ${darkMode ? "white" : "gray"}`, backgroundColor: darkMode ? "RGB(25, 32, 45)" : "RGB(230, 245, 255)"}} className="custom-container-answer mt-0 p-2 px-3 position-relative">
                    <div className="row mr-0">
                        <div className='col-auto'>
                            {image && image[0] && image[0].url &&
                                <img
                                style={{
                                    width: "30px",
                                    height: "30px",
                                    marginRight: "0px",
                                    borderRadius: "50%",
                                    marginBottom: "3px"
                                }}
                                className='preview-image'
                                src={image[0].url}
                                alt="profilePicture"
                                />
                            }
                        </div>
                        <div className="col" style={{padding:"0px"}}>
                            <h6 className="mt-1" style={{color: darkMode ? Text.darkMode : Text.lightMode}}> {answer.user.username} </h6>
                        </div>
                    </div>
                    <div className={`row border ${darkMode ? "border-grey" : "border-dark"} mb-1 mx-0`}></div>
                    <div className="">
                        <p className="mb-1" style={{color: darkMode ? Text.darkMode : Text.lightMode}}> {answer.body} </p>
                    </div>
                    {
                        thankedAnswerExist === false && question.userId === user.id &&
                        <div class="position-absolute end-0 p-1 px-3 text-danger fw-bold" style={{top: "3px"}}>
                            <button onClick={() => handleGiveThanks(answer.id,answer.body,answer.user)} className="btn btn-danger py-0 px-1">
                                Give Thanks
                            </button>
                        </div>
                    }
                    {
                        answer.thanks === true &&
                        <div class="position-absolute end-0 p-1 px-3 text-danger fw-bold" style={{top: "3px"}}>
                            <Badge colorScheme='red'>Thanked By Author</Badge>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
  }