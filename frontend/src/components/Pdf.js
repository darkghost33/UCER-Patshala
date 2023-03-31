import React from "react";
// import "../css/pdf.css"
function Pdf() {
  return (
    <div>
      <div className="split top">
        <h1>Computer Science Courses</h1>
        <p>Contains Core CS/IT Subjects</p>
        <button onclick="location.href='pdf.html'">Big Data</button>
      </div>
      <div className="split bottom">
        <h1>Aptitude Courses And other Resources</h1>
        <p>Contains Aptitude And Other Placement Resources</p>
      </div>
      <center>
		<h1 style={{color: "green"}}>Big Data</h1>
        <br/><br/><br/><br/><br/><br/>
		<br/>
		<br/>
		<br/>
		<br/>
		<object data=
                      "D:\Big Data\1653330982166BIG-DATA-Notes-EIOV\Notes\Unit 1 Big Data Tutorial.pdf"
       		width="900"
				height="800">
		</object>           
		<br/>   
		<br/>
		<br/> 
		<br/>
		<br/><br/><br/><br/><br/>
		<br/>
		
        <object data=
              
                      "D:\Big Data\1653330982166BIG-DATA-Notes-EIOV\Notes\Unit 2 Big Data Tutorial.pdf"
        		width="900"
				height="800"
				>

		<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
		<br/>
		<br/>
		<br/><br/><br/><br/><br/><br/><br/>
		</object>        
		<div class='p'>      
        <object data=
              
                      "D:\Big Data\1653330982166BIG-DATA-Notes-EIOV\Notes\Unit 3 Big Data Tutorial.pdf"
        		width="900"
				height="700">
		</object> 
		</div>        
		<br/>
		<br/><br/><br/><br/><br/><br/><br/>
		<br/>
		<br/>     
        <object data=
              
                      "D:\Big Data\1653330982166BIG-DATA-Notes-EIOV\Notes\Unit 4 Big Data Tutorial.pdf"
        		width="900"
				height="800">
		</object>            
		<br/>
		<br/>
		<br/><br/><br/><br/><br/><br/><br/>
		<br/>  
        <object data=
              
                      "D:\Big Data\1653330982166BIG-DATA-Notes-EIOV\Notes\Unit 5 Big Data Tutorial.pdf"
				width="900"
				height="800">
		</object>
	</center>
    </div>
  );
}

export default Pdf;
