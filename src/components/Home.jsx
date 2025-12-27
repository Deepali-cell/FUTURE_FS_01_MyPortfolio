import "../css_files/Home.css";

const Home = () => {
  return (
    <>
      <div id="home">
        <div id="home_part1">
          <div id="part1_outer">
            <h3>HI, MY NAME IS</h3>

            <h1 className="user_name">Deepali</h1>

            <h1 className="user_profession">Aspiring Software Developer</h1>

            <p className="user_detail1">
              MERN Stack Developer | BCA Final Year Student
            </p>

            <p className="user_detail2">
              Passionate about building end-to-end full-stack web applications
              <br />
              while continuously learning modern technologies.
            </p>
          </div>

          <div>
            <a href="#projects">
              <button id="start_btn">🚀 View My Projects</button>
            </a>
          </div>
        </div>

        <div id="home_part2">
          <img src="/home/tech1.png" alt="tech-logo" />
          <img src="/home/tech2.png" alt="tech-logo" />
          <img src="/home/tech3.png" alt="tech-logo" />
          <img src="/home/tech4.png" alt="tech-logo" />
          <img src="/home/tech5.png" alt="tech-logo" />
          {/* <img src="/home/tech6.png" alt="tech-logo" /> */}
          <img src="/home/tech7.png" alt="tech-logo" />
          <img src="/home/tech8.png" alt="tech-logo" />
        </div>
      </div>
    </>
  );
};

export default Home;
