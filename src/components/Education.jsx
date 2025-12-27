import "../css_files/Education.css";
import { educationData } from "../lib/EducationData";

const Education = () => {
  return (
    <div id="education">
      <div className="part1">
        <h2 id="heading">Education</h2>
        <p>
          My academic journey has helped me build a strong foundation in
          computer applications and problem-solving skills.
        </p>
      </div>

      <div className="education_list">
        {educationData.map((e, index) => (
          <div className="education_card" key={index}>
            <div className="edu_header">
              <img src={e.img} alt={e.name} />
              <div>
                <h2>{e.name}</h2>
                <h4>{e.cource}</h4>
                <h5>{e.date}</h5>
              </div>
            </div>
            <p className="edu_desc">{e.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
