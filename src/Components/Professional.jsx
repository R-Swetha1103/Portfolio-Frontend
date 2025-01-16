// Professional.js
import React from 'react';
import './Professional.css'; // Ensure this file is still referenced

const Professional = () => {
  return (
    <div className="professional-section" id="professional"> {/* Add id here */}
      <h2 className="professional-header">Professional Journey: Education & Experience</h2>
      <p className="professional-intro">
        I am Swetha, a dedicated and forward-thinking professional, deeply passionate about technology and 
        committed to continuous learning and growth in the dynamic field of Web Development.
      </p>
      
      <h3 className="professional-certification-header">👩🏻‍🎓 Certification</h3>
      <div className="certification-card">
        <h4>GUVI - Full Stack Developer Course</h4>
        <p>
          Successfully completed the Full Stack Developer course from GUVI, covering HTML, CSS, React.js, Node.js, databases, and authentication. Developed diverse projects showcasing practical skills.
        </p>
      </div>

      <h3 className="education-header">👩🏻‍🎓 Education</h3>
      <div className="education-card">
        <h4>Bachelor of Engineering </h4>
        <p>
        Graduated with a Bachelor of Engineering in Electrical and Electronics Engineering from Jeppiaar Engineering College, Chennai in 2021.        </p>
      </div>
      <div className="education-card">
        <h4>Higher Secondary Education</h4>
        <p>
          Completed Higher Secondary education in 2017 at Velammal Matriculation Hr. Sec. School.
        </p>
      </div>

      <h3 className="work-experience-header">💼 Work Experience</h3>
      <div className="work-experience-card">
        <h4>Wipro Limited</h4>
        <h5>
          Project Engineer 07-02-2022 - Present
        </h5>
        <p>
        Worked as a Project Engineer in the Developer L2 role at Wipro, with over 3 years of experience. Focused on system configuration, workflow analysis, and developing scalable applications to meet client needs while ensuring timely delivery and high-quality standards.
        </p>
      </div>

      <h3 className="languages-skills-header">🏫 Languages & Skills</h3>
      <div className="languages-skills-card">
        <h4>SNRC</h4>
        <h5>
        Japanese Language Learning
        </h5>
        <p>
        Pursuing Japanese language proficiency with a focus on JLPT N5 certification preparation.</p>
      </div>

    </div>
  );
};

export default Professional;
