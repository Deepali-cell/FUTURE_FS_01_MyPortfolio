import "../css_files/About.css";

const About = () => {
  return (
    <>
      <div id="about">
        <div id="about_part1">
          <img src="/about/image.png" alt="user_img" />
        </div>
        <div id="about_part2">
          <h2 class="heading">About Me</h2>
          <p>
            Bringing modern technologies into the real world in my
            <span>DNA.</span>
            <br />
            Worked on multiple startups and governmental projects to get the
            <br />
            ideas into real-world mobile and web application and developed
            <br />
            successfully Educational startups in Uzbekistan.
          </p>
          <button id="resume_btn">😊 Download My Resume</button>
        </div>
      </div>
    </>
  );
};

export default About;
