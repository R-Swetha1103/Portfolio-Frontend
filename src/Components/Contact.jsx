import React, { useState } from 'react';
import './Contact.css'; // Ensure this file is created and linked
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false); // For handling form submission status

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Set loading to true when starting submission

    try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL || 'https://portfolio-backend-1-e67m.onrender.com'}/send-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
            alert('Message sent successfully!');
            setName("");
            setEmail("");
            setMessage("");
        } else {
            const errorText = await response.text();
            console.error('Error:', errorText);
            alert(`Failed to send message. ${errorText}`);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Failed to send message. Please try again later.');
    } finally {
        setIsLoading(false); // Ensure loading is set back to false
    }
  };

  return (
    <div className="contact-section" id="contact">
      <div className="contact-details">
        <h2 className="contact-header">Get in Touch 🎧</h2>
        <p>Have a project in mind or just want to say hi? Feel free to reach out!</p>
        <div className="contact-info">
          <p><strong>📞</strong> +91 7397394241</p>
          <p><strong>✉️</strong> swetharagupathy1103@gmail.com</p>
        </div>
        <div className="social-icons">
          <a href="https://www.linkedin.com/in/swetha-ragupathy-902a911bb/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://github.com/R-Swetha1103" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
        </div>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Name *" 
          required 
          value={name} 
          onChange={e => setName(e.target.value)} 
        />
        <input 
          type="email" 
          placeholder="Email *" 
          required 
          value={email} 
          onChange={e => setEmail(e.target.value)} 
        />
        <textarea 
          placeholder="Message *" 
          required 
          value={message} 
          onChange={e => setMessage(e.target.value)} 
        ></textarea>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'SENDING...' : 'SEND MESSAGE'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
