import "../css_files/Skills.css";
import { skillsData } from "../lib/SkillsData";

const Skills = () => {
  return (
    <div id="skills">
      <div className="part1">
        <h2 id="heading">Skills</h2>
        <p>
          Skilled in designing scalable architectures, building efficient
          applications, and delivering clean, maintainable code aligned with
          best engineering practices.
        </p>
      </div>

      <div className="skills_grid">
        {skillsData.map((s, index) => (
          <div className="skill_card" key={index}>
            <img src={s.img} alt={s.name} />

            <div className="skill_content">
              <h1>{s.name}</h1>

              <ul>
                {s.skills.split(",").map((skill, i) => (
                  <li key={i}>{skill.trim()}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
