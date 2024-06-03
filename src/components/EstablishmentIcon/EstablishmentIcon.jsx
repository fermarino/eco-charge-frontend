import React from 'react';
import './EstablishmentIcon.css';

const EstablishmentIcon = ({ src, alt, width, height }) => {
  return (
    <div className="establishment-image">
      <img src={src} alt={alt} width={width} height={height} />
    </div>
  );
};

export default EstablishmentIcon;
