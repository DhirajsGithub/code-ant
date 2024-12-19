import React from 'react';
import './notFoundStyle.css';

const NotFoundPage: React.FC = () => {
  return (
    <div className="notFoundContainer">
      <h1>Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <a href="/dashboard">Dashboard</a>
    </div>
  );
};

export default NotFoundPage;
