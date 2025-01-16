// Projects.js
import React from 'react';
import './Projects.css'; // Ensure styling remains the same
import './Header.jsx'; // Import the Header component

const Projects = () => {
  <header/> // Import the Header component here
  return (
    <div className="projects-section" id="projects"> {/* Add id="projects" */}
      <h2 className="projects-header">Projects That I Made</h2>
      <div className="projects-container">
        
        {/* First Row of Projects */}
        <div className="projects-row">
          <div className="project-card">
            <img src="images/Screenshot 0007-01-15 at 6.59.04 PM.png" alt="" className="project-image" />
            <h3>Fitness Class Booking Platform</h3>
            <p>
            A dynamic web application for booking personalized fitness classes. 
            Developed with React.js and Tailwind CSS for a responsive user interface, and backed by Express.js for secure and efficient backend operations. 
            Features include class booking, user authentication, and personalized fitness plans.</p>
            <div className="project-buttons">
            <a href="https://thriving-otter-5e3237.netlify.app/" className="project-button" target="_blank" rel="noopener noreferrer">Live Site</a>
            </div>
          </div>

          <div className="project-card">
            <img src="images/Screenshot 0007-01-15 at 7.01.04 PM.png" alt="" className="project-image" />
            <h3>Ecommerce Shopping Platform</h3>
            <p>
              ShopSmart is a sleek eCommerce web application that offers a seamless shopping experience. 
              Users can browse products, add them to their cart, and securely pay through an integrated payment gateway.
            </p>
            <div className="project-buttons">
            <a href="https://sparkly-truffle-d4c753.netlify.app/" className="project-button" target="_blank" rel="noopener noreferrer">Live Site</a>
            </div>
          </div>
        </div>

        {/* Second Row of Projects */}
        <div className="projects-row">
          <div className="project-card">
            <img src="images/Screenshot 0007-01-15 at 6.56.36 PM.png" alt="" className="project-image" />
            <h3>React Price Card</h3>
            <p>
            A dynamic and responsive pricing card web application built with React.js and JSX. 
            It displays various subscription plans with features like storage, project access, phone support, subdomains, and reports. 
            The pricing cards are dynamically rendered from an array of data, offering a clean, modern, and user-friendly interface.</p>
            <div className="project-buttons">
            <a href="https://keen-sable-c78f70.netlify.app/" className="project-button" target="_blank" rel="noopener noreferrer">Live Site</a>
            </div>
          </div>

          <div className="project-card">
            <img src="images/Screenshot 0007-01-15 at 6.49.47 PM.png" alt="" className="project-image" />
            <h3>Library Management</h3>
            <p>
            This Admin Dashboard for a Library Management System, built with React, allows managing books and authors. 
            It supports adding, editing, and deleting entries with Formik forms, dynamic updates using useState, and a responsive layout. 
            React-toastify is used for notifications, with styling via CSS and Bootstrap.
            </p>
            <div className="project-buttons">
            <a href="https://boisterous-manatee-a9bf79.netlify.app/" className="project-button" target="_blank" rel="noopener noreferrer">Live Site</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

