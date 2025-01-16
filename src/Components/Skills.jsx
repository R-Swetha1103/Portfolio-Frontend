// Skills.js
import React from 'react';
import './Skills.css'; // Import the CSS file for styling

const Skills = () => {
  return (
    <div className="skills-section" id="skills"> {/* Add id="skills" */}
      <h2 className="skills-header">Skills & Technologies I Know</h2>
      <div className="skills-container">
        {/* Frontend Skills */}
        <div className="skills-category">
          <h3>Frontend</h3>
          <div className="skills-icons">
            <div className="skill">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/800px-HTML5_logo_and_wordmark.svg.png" alt="HTML5" className="skill-icon" />
              <span>HTML5</span>
            </div>
            <div className="skill">
              <img src="https://coryrylan.com/assets/images/posts/types/css-800x800.png" alt="CSS3" className="skill-icon" />
              <span>CSS3</span>
            </div>
            <div className="skill">
              <img src="https://i0.wp.com/blog.lewagon.com/wp-content/uploads/2023/07/javascript-g065129b6c_1280.png?fit=800%2C800&ssl=1" alt="JavaScript" className="skill-icon" />
              <span>JavaScript</span>
            </div>
            <div className="skill">
              <img src="https://www.svgrepo.com/show/306646/react.svg" alt="React" className="skill-icon" />
              <span>React</span>
            </div>
            <div className="skill">
              <img src="https://www.svgrepo.com/show/333511/bootstrap.svg" alt="Bootstrap" className="skill-icon" />
              <span>Bootstrap</span>
            </div>
          </div>
        </div>

        {/* Backend Skills */}
        <div className="skills-category">
          <h3>Backend & Database</h3>
          <div className="skills-icons">
            <div className="skill">
              <img src="https://miro.medium.com/v2/resize:fit:800/1*v2vdfKqD4MtmTSgNP0o5cg.png" alt="Node.js" className="skill-icon" />
              <span>Node.js</span>
            </div>
            <div className="skill">
              <img src="https://toppng.com/uploads/preview/mongodb-logo-vector-11573974015v1n2smgkxa.jpg" alt="MongoDB" className="skill-icon" />
              <span>MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;



