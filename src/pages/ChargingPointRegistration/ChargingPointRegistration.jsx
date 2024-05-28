import React from 'react';
import { Link } from 'react-router-dom';
import './ChargingPointRegistration.css';
import ChargingPointImage from '../../images/chargingPoint.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function ChargingPointRegistration() {
  return (
    <div className="wrapper-content">
      <Link to="/" className="back-button">
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        <span className="back-text">Voltar</span>
      </Link>
      <div className="charging-point-registration">
        <div className="charging-point-icon">
          <img src={ChargingPointImage} alt="Ponto de Recarga" width="80" height="80" />
        </div>
        <h2 className='title'>Cadastro de Pontos de Recarga</h2>
        <h3 className='place-name'>Cafeteria Paço Alfandega</h3>
        <label htmlFor="connector-type">Tipo de Conector</label>
        <select id="connector-type">
          <option value="type2">CONECTOR TIPO 2 - IEC 62196</option>
          <option value="type2">CONECTOR TIPO 3 - IEC 62196</option>
        </select>
        <div className="btn-wrapper">
          <button className="register-button">CADASTRAR</button>
        </div>
      </div>
    </div>
  );
}

export default ChargingPointRegistration;
