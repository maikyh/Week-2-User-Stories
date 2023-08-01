import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../UserContext.js";
import { useNavigate } from "react-router-dom";
import { NavDropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { url, MAX_TIME, nothingInLocalStorage } from "../../utils/Constants.jsx";
import { Button } from "@chakra-ui/button";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import 'bootstrap/dist/css/bootstrap.css';
import "./Navbar.css";

const MAX_LENGTH = 120;

const Navbar = ({ images, handleSetSearchQuery, handleLogout }) => {
    const { user, updateUser, darkMode, updateDarkMode } = useContext(UserContext);
    const [questions, setQuestions] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false);

    function truncateText(body) {
        if (body.length > MAX_LENGTH) return body.substring(0, MAX_LENGTH) + "...";
        return body;
    }

    const image = user ? images?.filter(image => image.public_id === user.email) : "";

    const removeQuestionsFromLocalStorage = () => {
        localStorage.removeItem('questions');
    };

    //For Questions
    useEffect(() => {
        const cachedQuestions = localStorage.getItem('questions');
        if (cachedQuestions && cachedQuestions.length > nothingInLocalStorage) {
            setQuestions(JSON.parse(cachedQuestions));
        }
        else {
            const fetchQuestions = async () => {
                const response = await fetch(url + '/questions');
                const data = await response.json();
                setQuestions(data);
            };

            fetchQuestions();
        }
    }, []);

    useEffect(() => {
        localStorage.removeItem('questions');
        localStorage.setItem('questions', JSON.stringify(questions));
        const timer = setTimeout(() => removeQuestionsFromLocalStorage(), MAX_TIME);
        return () => clearTimeout(timer);
    }, [questions])

    const questionsPool = questions.map(question => truncateText(question.body));

    const navigate = useNavigate();

    const handleOutsideClick = (event) => {
        if (event.button === 0) {
            setIsSuggestionsOpen(false);
        }
    };

    const handleInput = (event) => {
        const value = event.target.value;
        setInputValue(value);
        const filteredSuggestions = questionsPool.filter(option =>
            option.toLowerCase().includes(value.toLowerCase())
        );
        setSuggestions(filteredSuggestions);
        setIsSuggestionsOpen(true);
    };

    const handleKeyPress = (event) => {
        if (event.key === "Enter") {
            handleSetSearchQuery(inputValue);
            navigate('/search');
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {document.removeEventListener('click', handleOutsideClick);};
    }, []);

    const handleUpdateDarkMode = () => {
        updateDarkMode(!darkMode);
        console.log("lol")
        console.log(darkMode)
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top" style={{ backgroundColor: darkMode ? "#2D3748" : "rgba(248,249,250,1)" }}>
            <div className="container">
                <div className="d-flex justify-content-between align-items-center w-100">
                    <a className="navbar-brand" style={{color: darkMode ? "rgba(255, 255, 255, 0.92)" : "rgba(0,0,0,1)"}} href="/home">Ans2Ask</a>
                    <div style={{ marginLeft: "4.75rem", marginRight: "4.75rem" }} className="flex-fill" >
                        <div className="autocomplete">
                            <input
                                onKeyDown={handleKeyPress}
                                onInput={handleInput}
                                value={inputValue}
                                type="text"
                                className="form-control"
                                placeholder="Search..."
                            />
                            {isSuggestionsOpen && suggestions.length > 0 && (
                                <div className="suggestions">
                                    {suggestions.map((suggestion, index) => (
                                        <div
                                            key={index}
                                            className="suggestion"
                                            onClick={() => {
                                                setInputValue(suggestion);
                                                handleSetSearchQuery(suggestion);
                                                setIsSuggestionsOpen(false);
                                                navigate('/search');
                                            }}
                                        >
                                            {suggestion}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <Link to={`/ask`} className={`btn ${darkMode ? 'btn-outline-light' : 'btn-outline-dark'}`}> Ask </Link>
                        <Button
                            onClick={() => updateDarkMode(!darkMode)}
                            marginLeft={"27px"}
                        >
                        {!darkMode ? (
                            <SunIcon color="black.200" />
                        ) : (
                            <MoonIcon color="blue.700" />
                        )}
                        </Button>
                        <NavDropdown
                            style={{ marginLeft: "1.55rem" }}
                            alignRight
                            title={
                                <div>
                                    <div className='preview-container' style={{position: 'absolute', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', width: "38px", height: "38px", top: "-5px" }}>
                                        {image && image[0] && image[0].url &&
                                            <img  className='preview-image' src={image[0].url} alt="profilePicture" />
                                        }
                                    </div>
                                </div>
                            }
                            id="basic-nav-dropdown"
                        >

                            <NavDropdown.Item>
                                {user ? (
                                    <Link style={{ textDecoration: 'none' }} to={`/user/${user.id}`}> View Profile </Link>
                                ) : (
                                    <Link style={{ textDecoration: 'none' }}> View Profile </Link>
                                )}
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={handleLogout} style={{ color: "red" }}>
                                <span style={{ color: "red" }}>Log Out &nbsp; </span>
                                <FontAwesomeIcon icon={faSignOutAlt} style={{ color: "red" }} />
                            </NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;