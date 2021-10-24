import React from "react";
import famImage from "../../assets/header/fam-pic.jpg";

function About() {
  return (
    <section className="my-5 background-img">
      <h1 id="about">Who am I?</h1>
      <div className="my-2">
        <a href="https://github.com/mjh1985codeman">
          <img
            src={famImage}
            alt="Picture of Michael Hodges w/ his family at the beach"
          />
        </a>
        <p>
          Hey there! Thanks for checking out my portfolio. My name is Michael
          Hodges; here a few things about me. I am a Husband, Dad, Novice
          Developer and Working Professional. I have 10 Years of payment
          industry experience which includes client services, management,
          reconciliation, pos support and navigating 3rd party integration.
          Currently working my way through a coding boot camp to break into the
          development community.
        </p>
      </div>
    </section>
  );
}

export default About;
