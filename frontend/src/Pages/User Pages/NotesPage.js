import React, { useState } from "react";

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
      <div
        style={{
          width: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid red",
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
            border: "2px solid green",
          }}
        >
          {/* Add Navbar Here */}
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
            <img
              src="https://media.tenor.com/u8M7kk5ZXmwAAAAM/banana-cat-crying.gif"
              alt="img"
            ></img>
            <h2>Notes nhi mila.....ehhhh ehhhh</h2>
            {/* <iframe width="600" height="400" src="https://www.youtube.com/embed/dwA3MFDwhoA" title="Beautiful Material 3 UI with Flutter and VelocityX | Flutter 3.10" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;" allowfullscreen></iframe> */}
            {notesdata.length > 0 ? (
              <div style={{  display: "flex",flexDirection:'column',width:'100%' , border:'2px solid red'}}>
                {notesdata.map((i, index) => {
                  return (
                    <div style={{  display: "flex", gap: "10" , border:'2px solid yellow'}}>
                      <p>{index+1}</p>
                      <p>{i.branch}</p>
                      <p>{i.year}</p>
                      <p>{i.subject}</p>
                      <p>{i.unit}</p>
                      <a href={`${i.pdfUrl}`}>Pdf Link</a>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>
                <h1>No notes found</h1></div>
            )}
          </>
        )}
      </div>
    </>
  );
}
