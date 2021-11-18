import React from "react";
import lotrImage from "../../assets/projects/LOTRSSGame.JPG";
import recImage from "../../assets/projects/RecipeScreenshot_50.jpg";
import workdayImage from "../../assets/projects/workday.JPG";
import runbuddyImage from "../../assets/projects/runbuddy2.JPG";
import techBloggerImage from "../../assets/projects/tech-blogger.JPG";
import teamkeeperImage from "../../assets/projects/Team-Keeper-SS.jpg";
import weatherdashboardImage from "../../assets/projects/Weather-Dashboard.JPG";
import notetakerImage from "../../assets/projects/Note-Taker.JPG";
import holidayImage from "../../assets/projects/holidaychaosSS.JPG";

function Portfolio() {
  return (
    <section className="my-5 background-img">
      <h1 id="about">Checkout my Projects below!</h1>
      <div className="container">
        <div className="card mb-3">
          <a href="https://mh-holiday-chaos-coordinator.herokuapp.com/">
            <img
              src={holidayImage}
              className="card-img-top img-thumbnail"
              alt="Screenshot of the Holiday Chaos Coordinator project"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">
              Holiday-Chaos-Coordinator!!! This FULL MERN Stack application was
              built using JavaScript, REACT, React-Router, MUI, Node.Js,
              Express.Js, GraphQL, ApolloGraphQL, MongoDB, MonGoose w/JSON Web
              Token authentication and deployed via Heroku.
            </h5>
            <p className="card-text">
              The holidays are fast approaching and you could use a hand in
              keeping your shopping list in order. Holiday Chaos Coordinator
              allows you to search the Target API to search products then save
              products to various shopping lists. We hope this app fills you
              with holiday cheer!
            </p>
          </div>
        </div>
        <div className="card mb-3">
          <a href="https://lotr-rpg.herokuapp.com/">
            <img
              src={lotrImage}
              className="card-img-top img-thumbnail"
              alt="Screenshot of the Lord of the Rings Project"
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">
              LOTR Text Adventure Game. Full-Stack application Built using
              MySQL2, Sequelize, Javascript, Handlebars Templating Engine,
              HowlerJS w/ user Authentication incorporating Express-Sessions and
              BCRYPT.
            </h5>
            <p className="card-text">
              Text-Based game that a user can sign into play where they can
              create a character and go through the game in which their score is
              dependant on the number of "wise" choices they make throughout the
              game.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="card mb-3">
            <a href="https://mjh1985codeman.github.io/Recipe-Generator/">
              <img
                src={recImage}
                className="card-img-top img-thumbnail"
                alt="Screenshot of the Recipe-Generator Project"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">
                Recipe Generator Built using CSS, HTML and JavaScript which
                incorporates getting information from a 3rd party API.
              </h5>
              <p className="card-text">
                App that you can use to generate random recipes based on
                available ingredients.
              </p>
            </div>
          </div>

          <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
              <div className="card">
                <a href="https://github.com/mjh1985codeman/Work-Day-Scheduler">
                  <img
                    src={workdayImage}
                    className="card-img-top img-thumbnail other-projects"
                    alt="screen shot of the work day scheduler application"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">
                    Work-Day-Scheduler built using HTML, CSS and Javascript.
                  </h5>
                  <p className="card-text">
                    Simple Work day schedule application that is color coded
                    based on the time.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <a href="https://mjh1985codeman.github.io/run-buddy/">
                  <img
                    src={runbuddyImage}
                    className="card-img-top img-thumbnail other-projects"
                    alt="screenshot of the rubuddy application"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">
                    Run Buddy built only using HTML and CSS
                  </h5>
                  <p className="card-text">
                    Simple Site built w/ Media Queries for scaled viewing
                    adjustments.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <a href="https://tech-time-blogger.herokuapp.com/">
                  <img
                    src={techBloggerImage}
                    className="card-img-top"
                    alt="screenshot of the tech-time-blogger application"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">
                    Tech-Time-Blogger. Full-Stack application Built using
                    MySQL2, Sequelize, Javascript, Handlebars w/ user
                    Authentication incorporating Express-Sessions and BCRYPT
                  </h5>
                  <p className="card-text">
                    A Blog site that users can log into in order to create
                    blogs, view other user blogs in addition to create, edit or
                    delete their own posts in addition to commenting on other
                    user blog posts.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <a href="https://github.com/mjh1985codeman/Team-Keeper">
                  <img
                    src={teamkeeperImage}
                    className="card-img-top"
                    alt="screenshot of the team-keeper application"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">
                    Team-Keeper. Built using MySQL and Javascript, powered by
                    NodeJS.
                  </h5>
                  <p className="card-text">
                    With this node js command prompt application a user is able
                    to answer specic questions about their team which once
                    complete auto-generates a styled HTML sheet w/ their team
                    members data.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <a href="https://mjh1985codeman.github.io/Weather-Dashboard/">
                  <img
                    src={weatherdashboardImage}
                    className="card-img-top"
                    alt="screenshot of the weather-dashboard application"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">
                    Weather Dashboard Application. Built using HTML, CSS and
                    JavaScript along with getting information from a 3rd party
                    API and storing recent searches in local storage for easy
                    retrieval.
                  </h5>
                  <p className="card-text">
                    A site where users are able to enter a city name to get the
                    current weather conditions and next 5 day forecast for that
                    specific city.
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <a href="https://note-taker-85.herokuapp.com/notes">
                  <img
                    src={notetakerImage}
                    className="card-img-top"
                    alt="screenshot of the note-taker application"
                  />
                </a>
                <div className="card-body">
                  <h5 className="card-title">
                    Simple Full-Stack application built w/ SQL, HTML, CSS and
                    JavaScript.
                  </h5>
                  <p className="card-text">
                    An application where users are able to Create, Read, Update
                    and Delete Notes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
