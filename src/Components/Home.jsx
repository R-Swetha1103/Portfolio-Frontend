import React, { useEffect, useState, useMemo } from "react";
import "./Home.css"; // Import the CSS file

const Home = ({ isDarkMode }) => {
  const [title, setTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Memoize the titles array to prevent it from being redefined on each render
  const titles = useMemo(() => ["Full Stack Developer", "Web Developer", "MERN Stack Developer"], []);

  useEffect(() => {
    const handleTyping = () => {
      const currentTitle = titles[titleIndex];

      if (!isDeleting) {
        if (charIndex < currentTitle.length) {
          setTitle((prevTitle) => prevTitle + currentTitle[charIndex]);
          setCharIndex((prevIndex) => prevIndex + 1);
        } else {
          setIsDeleting(true);
        }
      } else {
        if (charIndex > 0) {
          setTitle((prevTitle) => prevTitle.slice(0, -1));
          setCharIndex((prevIndex) => prevIndex - 1);
        } else {
          setIsDeleting(false);
          setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
          setCharIndex(0);
        }
      }
    };

    const typingInterval = setInterval(handleTyping, isDeleting ? 100 : 200);
    return () => clearInterval(typingInterval);
  }, [charIndex, titleIndex, isDeleting, titles]);

  return (
    <div className={`home ${isDarkMode ? "dark-theme" : ""}`} id="home">
      <div className="text-container">
        <h1>Hello,</h1>
        <h2>
          It's <span className="highlight bouncing-effect">Swetha</span>
        </h2>
        <h3>And I'm into</h3>
        <h3>
          <span className="highlight">{title}</span>
        </h3>
        <p>
          Passionate about delivering innovative and efficient engineering
          solutions that drive meaningful impact and foster progress.
          Continuously seeking opportunities to apply my skills, collaborate
          with diverse teams, and contribute to forward-thinking projects that
          inspire growth and innovation.
        </p>
        <button className="about-button">More About Me</button>
      </div>
      <div className="image-container">
        <img
          src="/images/PHOTO-2025-01-13-15-53-14.jpg"
          alt="Profile"
          className="profile-image"
        />
      </div>
    </div>
  );
};

export default Home;
