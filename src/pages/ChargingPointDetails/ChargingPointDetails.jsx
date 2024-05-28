import React from 'react';
import { Link } from 'react-router-dom';
import './ChargingPointDetails.css';
import ChargingPointImage from '../../images/chargingPoint.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function ChargingPointDetails() {
  const chargingPoint = {
    establishmentName: "Cafeteria Paço Alfândega",
    id: "4H2987DJ",
    status: "Disponível",
    faturamento: "R$ 3921,97",
    consumo: "1000 kWh"
  };

  return (
    <div className="wrapper-content">
      <Link to="/" className="back-button"> 
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        <span className="back-text">Voltar</span>
      </Link>
      <div className="charging-point-details">
        <div className="charging-point-icon">
          <img src={ChargingPointImage} alt="Ponto de Recarga" width="100" height="100" />
        </div>
        <h2 className="establishment-name">{chargingPoint.establishmentName}</h2>
        <p>ID: <span>{chargingPoint.id}</span></p>
        <p><span className={chargingPoint.status === "Disponível" ? "green" : "red"}>{chargingPoint.status}</span></p>
        <div className="info">
          <div className="info-box">
            <p>Faturamento</p>
            <p className="value">R$ 3921,97</p>
          </div>
          <div className="info-box">
            <p>Consumo</p>
            <p className="value blue">1000 kWh</p>
          </div>
        </div>
        <Link to="/editar-ponto-recarga" className="edit-button">
          <FontAwesomeIcon icon={faEdit} />
          <span>Editar</span>
        </Link>
      </div>
    </div>
  );
}

export default ChargingPointDetails;
