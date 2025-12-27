import "../css_files/About.css";

const About = () => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume/DeepaliResume.pdf";
    link.download = "Deepali_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div id="about">
        <div id="about_part1">
          <img src="/about/image.png" alt="user_img" />
        </div>

        <div id="about_part2">
          <h2 className="heading">About Me</h2>

          <p>
            I am a <span>BCA final-year student</span> and an{" "}
            <span>aspiring Software Developer</span> with a strong interest in{" "}
            <span>full-stack web development</span>.
            <br />I have hands-on experience working with the{" "}
            <span>MERN stack</span> and enjoy building{" "}
            <span>end-to-end web applications</span>.
            <br />I focus on writing <span>clean, maintainable code</span> and
            continuously improving my <span>problem-solving skills</span>.
            <br />
            Through <span>academic projects</span> and{" "}
            <span>personal practice</span>, I have gained practical exposure to{" "}
            <span>frontend development</span>, <span>backend APIs</span>, and{" "}
            <span>database integration</span>.
            <br />I am <span>eager to learn</span>, open to challenges, and
            motivated to grow as a software developer by working on{" "}
            <span>real-world projects</span> and collaborating with{" "}
            <span>experienced teams</span>.
          </p>

          {/* Resume Download */}
          <button id="resume_btn" onClick={downloadResume}>
            📄 Download My Resume
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
