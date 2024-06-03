import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './BackButton.css';

const BackButton = ({ to, label }) => {
  return (
    <Link to={to} className="back-button">
      <FontAwesomeIcon icon={faArrowLeft} size="lg" />
      <span className="back-text">{label}</span>
    </Link>
  );
};

export default BackButton;
