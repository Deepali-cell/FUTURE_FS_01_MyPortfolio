import { recentcaseData } from "../lib/recentcaseData";
import "../css_files/RecentCase.css";

const RecentCases = () => {
  return (
    <div className="recent_wrapper" id="recentcase">
      <div className="part1">
        <h2 id="heading">Recent Cases</h2>
        <p>
          I am a product-oriented Software Engineer with a business mindset from
          bringing the latest tech to launching successful startups!
        </p>
      </div>

      <div className="recent_cases">
        {recentcaseData.map((item, index) => (
          <div className="case_card" key={index}>
            {/* Left Content */}
            <div className="case_content">
              {item.title ? (
                <img src={item.title} alt="title" className="title_img" />
              ) : (
                <h3 className="title_heading">{item.heading}</h3>
              )}

              <p>{item.description}</p>

              {item.cardtechimg && (
                <img
                  src={item.cardtechimg}
                  alt="tech stack"
                  className="tech_img"
                />
              )}

              <button className="case_btn">{item.btnname}</button>
            </div>

            {/* Right Image */}
            <div className="case_img">
              <img src={item.cardimg} alt="case" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentCases;
