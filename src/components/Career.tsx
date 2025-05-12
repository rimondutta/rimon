import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React.js Developer</h4>
                <h5>Isbx</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Experienced in building dynamic, responsive UIs with React.js. I focus on clean code, reusable components, and seamless user experiences with efficient state management
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>React Native Developer</h4>
                <h5>Appxrush</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Skilled in building cross-platform mobile apps using React Native. I create smooth, high-performance applications with native feel and optimized UI/UX across devices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Mern Stack Engineer</h4>
                <h5>Marketing Lab</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Proficient in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I develop scalable, efficient solutions with clean APIs and responsive UIs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
