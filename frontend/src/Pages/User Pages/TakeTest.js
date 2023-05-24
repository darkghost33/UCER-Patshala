import React, { useState, useEffect } from "react";
import { TestData } from "./TestData";
import TestResult from "./TestResult";
import "../../css/TestPage.css";

const TEST_DURATION = 15;

export default function TakeTest() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [remainingTime, setRemainingTime] = useState(TEST_DURATION);
  const [testEnded, setTestEnded] = useState(false);
  const [testStarted, setTestStarted] = useState(false);
  const [timerStarted, setTimerStarted] = useState(false);
  const [isTabVisible, setIsTabVisible] = useState(true);

  const handleStartTest = () => {
    setTestStarted(true);
    setTimerStarted(true);
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        setIsTabVisible(true);
      } else {
        setIsTabVisible(false);
        endTest();
        alert("The test has ended as you have switched tabs.");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  useEffect(() => {
    if (timerStarted && remainingTime > 0 && !testEnded && isTabVisible) {
      const timer = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    } else if (remainingTime <= 0) {
      endTest();
      setRemainingTime(0);
    }
  }, [remainingTime, testEnded, timerStarted, isTabVisible]);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < TestData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
      setTestEnded(true);
      setRemainingTime(0);
    }
  };

  const updateScore = () => {
    if (clickedOption === TestData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const endTest = () => {
    setIsTabVisible(true);
    setShowResult(true);
    setRemainingTime(0);
  };

  return (
    <div>
      <p className="heading-txt">TEST</p>
      <div className="container">
        {!testStarted ? (
          <>
            <div className="question">
              <ol>
                <li>Please prepare yourself.</li>
                <li>No tab switching allowed.</li>
                <li>
                  The test will end immediately if you move away from this
                  window.
                </li>
                <li>Please give the test at one sitting only.</li>
              </ol>
            </div>
            <button id="go-back-btn" onClick={handleStartTest}>
              Start Test
            </button>
          </>
        ) : (
          <>
            <div
              className={`timer ${
                remainingTime <= 5 && remainingTime > 0 ? "" : "stopped"
              }`}
            >
              Remaining Time: {remainingTime} seconds
            </div>
            {showResult ? (
              <TestResult score={score} totalScore={TestData.length} />
            ) : (
              <>
                <div className="question">
                  {" "}
                  <span id="question-number">{currentQuestion + 1}. </span>
                  <span id="question-txt">
                    {TestData[currentQuestion].question}
                  </span>
                </div>
                <div className="option-container">
                  {TestData[currentQuestion].options.map((option, i) => {
                    return (
                      <button
                        className={`option-btn ${
                          clickedOption === i + 1 ? "checked" : null
                        }`}
                        key={i}
                        onClick={() => setClickedOption(i + 1)}
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
                <input
                  type="button"
                  value="Next"
                  id="next-button"
                  onClick={changeQuestion}
                />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
