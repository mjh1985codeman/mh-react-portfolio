import React from "react";
import mhResume from "../../assets/resume/MHResume.docx";

function Resume() {
  return (
    <div className="container">
      <section className="my-5 background-img">
        <h1 id="about">Thank You!</h1>
        <div className="my-2">
          <a href={mhResume} download="MHResume">
            <button type="button">Click Here to Download My Resume!</button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Resume;
