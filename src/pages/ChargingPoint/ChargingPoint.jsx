import React from 'react';
import { Link } from 'react-router-dom';
import ChargingPointImage from '../../images/chargingPoint.svg';
import './ChargingPoint.css';

function ChargingPoint({ id, status, connectorType, linkTo }) {
  return (
    <Link to={linkTo} className="charging-point">
      <div className="charging-point-icon">
        <img src={ChargingPointImage} alt="Ponto de Recarga" width="80" height="80" />
      </div>
      <div className="charging-point-info">
        <p className="title">PONTO DE RECARGA</p>
        <p>Conector {connectorType}</p>
        <p>ID: {id}</p>
        <p className={`status ${status === "DISPONÍVEL" ? "green" : "red"}`}>{status}</p>
      </div>
      <div className="charging-point-arrow">
        <span>&gt;</span>
      </div>
    </Link>
  );
}

export default ChargingPoint;
