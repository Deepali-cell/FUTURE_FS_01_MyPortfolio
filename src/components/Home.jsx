import "../css_files/Home.css";

const Home = () => {
  return (
    <>
      <div id="home">
        <div id="home_part1">
          <div id="part1_outer">
            <h3>HI, MY NAME IS</h3>
            <h1 class="user_name">Mukhammadyusuf</h1>
            <h1 class="user_profession">I am Software Engineer</h1>
            <p class="user_detail1">
              4+ years of making the job done in the{" "}
              <span>
                Tech Industry <span>!</span>
              </span>
            </p>
            <p class="user_detail2">
              I am product-oriented Software Enginner with a bussiness mindset
              <br /> from bringing the latest tech to launching successfully
              startups!
            </p>
          </div>
          <div>
            <button id="start_btn">🚀Let's Get Started!</button>
          </div>
        </div>
        <div id="home_part2">
          <img src="/home/img1.png" alt="company_name" />
          <img src="/home/img2.png" alt="company_name" />
          <img src="/home/img3.png" alt="company_name" />
          <img src="/home/img4.png" alt="company_name" />
          <img src="/home/img5.png" alt="company_name" />
          <img src="/home/img6.png" alt="company_name" />
        </div>
      </div>
    </>
  );
};

export default Home;
