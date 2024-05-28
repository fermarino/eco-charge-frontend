import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ChargingPointEdit.css';
import ChargingPointImage from '../../images/chargingPoint.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

function ChargingPointEdit() {
  const [chargingPoint, setChargingPoint] = useState({
    id: '4H2987DJ',
    connectorType: 'type2',
    status: 'available',
  });

  const handleUpdateChargingPoint = () => {
    console.log('Ponto de recarga atualizado:', chargingPoint);
    // Adicione a lógica de atualização aqui
  };

  return (
    <div className="wrapper-content">
      <Link to="/" className="back-button">
        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
        <span className="back-text">Voltar</span>
      </Link>
      <div className="charging-point-edit">
        <div className="charging-point-icon">
          <img src={ChargingPointImage} alt="Ponto de Recarga" width="100" height="100" />
        </div>
        <h2 className='title'>Editar Ponto de Recarga</h2>
        <h3 className='place-name'>Cafeteria Paço Alfândega</h3>
        <label htmlFor="connector-type">Tipo de Conector</label>
        <select
          id="connector-type"
          value={chargingPoint.connectorType}
          onChange={(e) => setChargingPoint({ ...chargingPoint, connectorType: e.target.value })}
        >
          <option value="type2">CONECTOR TIPO 2 - IEC 62196</option>
          <option value="type3">CONECTOR TIPO 3 - IEC 62196</option>
        </select>
        <label htmlFor="status">Status</label>
        <select
          id="status"
          value={chargingPoint.status}
          onChange={(e) => setChargingPoint({ ...chargingPoint, status: e.target.value })}
        >
          <option value="available">Disponível</option>
          <option value="unavailable">Indisponível</option>
        </select>
        <div className="btn-wrapper">
          <button className="update-button" onClick={handleUpdateChargingPoint}>Atualizar</button>
        </div>
      </div>
    </div>
  );
}

export default ChargingPointEdit;
