import React from "react";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
export default function TestResult(props) {
  return (
    <>
      <div className="show-score">
        Your Score:{props.score}
        <br />
        Total Score:{props.totalScore}
      </div>
      
      <Link to={"/userData"} style={{ textDecoration: "none" }}>
        <button id="go-back-btn">
          <FontAwesomeIcon
            icon={faArrowLeft}
            size="lg"
            style={{
              top: 10,
              left: 15,
              marginRight:10
            }}
          />
          Back to User Homepage
        </button>
      </Link>
    </>
  );
}
