import React, { useState } from "react";
import Navbar from "../../components/Navbar";

export default function NotesPage() {
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(true);
  const [notesdata, setNotesData] = useState([]);
  const handleView = (e) => {
    e.preventDefault();
    setLoading(false);
    const searchQuery = new URLSearchParams({ branch, year }).toString();
    fetch(`http://localhost:5000/getAllUploadedPdf?${searchQuery}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setNotesData(data.data);
      });
  };
  // useEffect(() => {
  //   console.log(notesdata);
  // }, [notesdata]);

  return (
    <>
      <Navbar
        menuItems={["Home", "About", "WebCode", "Contact"]}
        loginText="Welcome User"
      ></Navbar>
      <div
        style={{
          width: "auto",
          marginTop: "70px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // border: "2px solid red",
        }}
      >
        <form
          onSubmit={handleView}
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            // border: "2px solid green",
          }}
        >
          <div>
            <label>Branch:</label>
            <select
              id="branch-select"
              value={branch}
              required
              onChange={(e) => setBranch(e.target.value)}
            >
              <option value="">Select a branch</option>
              <option value="cs/it">CS/IT</option>
              <option value="ec">EC</option>
              <option value="ee">EE</option>
              <option value="me">ME</option>
            </select>
          </div>
          <div>
            <label>Year:</label>
            <select
              id="year-select"
              value={year}
              required
              onChange={(e) => setYear(e.target.value)}
            >
              <option value="">Select a year</option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="4th">4th</option>
            </select>
          </div>
          <button className="btn btn-primary" type="submit">
            View Notes
          </button>
        </form>
        {loading ? (
          <>
            <div>
              <img
                src="https://aajhslivewire.com/wp-content/uploads/2018/05/study-clipart-person-studying-clipart-1.jpg"
                alt="img"
              ></img>
            </div>
            <h1> Select your branch and year to view your notes here</h1>
          </>
        ) : (
          <>
            {notesdata.length > 0 ? (
              <>
                <div className="d-flex justify-content-around align-items-center border rounded border-secondary">
                  {notesdata.map((i, index) => {
                    return (
                      <>
                        <div class="embed-responsive embed-responsive-16by9">
                          <iframe
                            class="embed-responsive-item"
                            src={`${i.pdfUrl}`}
                            allowfullscreen
                            title={`${i.index}`}
                          ></iframe>
                        </div>
                        <div class="card" style={{ width: "18rem" }}>
                          <div class="card-body">
                            <h5 class="card-title">
                              {index + 1}. {i.subject}
                            </h5>
                            <h6 class="card-subtitle mb-2 text-muted">
                              Unit -{i.unit}
                            </h6>
                            <p class="card-text">
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </p>
                            <a href={`${i.pdfUrl}`}>Pdf Link</a>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </>
            ) : (
              <div>
                <img
                  src="https://cdn-bbeoo.nitrocdn.com/qmCVQYRCWGzHArsQEaxlonBAyCtBBIUq/assets/images/optimized/rev-468a123/wp-content/uploads/elementor/thumbs/no-result-found-plzjaev368yh9z4dtefdm0dh8ryyv1dn832r9dy1b4.jpg"
                  height="200px"
                  width="400px"
                  alt="img"
                  bo
                ></img>
                {/* <h1>No notes found</h1> */}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}
