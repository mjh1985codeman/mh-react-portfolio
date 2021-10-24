import React from "react";
import mhResume from "../../assets/resume/MHResume.docx";

function Resume() {
  return (
    <div className="container">
      <section className="my-5 background-img ">
        <div className="d-flex justify-content-center">
          <h1 id="about">Click the button to download my resume!</h1>
        </div>
        <div className="d-flex justify-content-around ">
          <a href={mhResume} download="MHResume">
            <button className="resume-btn p-2" type="button">
              RESUME
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Resume;
