import React, { useState } from 'react';
import './AddEstablishment.css';
import EstablishmentIcon from '../../components/EstablishmentIcon/EstablishmentIcon';
import Establishment from '../../images/estabelecimento.svg';
import BackButton from '../../components/BackButton/BackButton';

const AddEstablishment = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para salvar os dados do estabelecimento
    console.log({ name, address, price, description });
  };

  return (
    <div className="add-establishment-container">
      <BackButton to="/" />
      <EstablishmentIcon src={Establishment} alt="Establishment Icon" width="100" height="100" />
      <form className="add-establishment-form" onSubmit={handleSubmit}>
        <h2>Cadastro de estabelecimento</h2>
        <div className="form-group">
          <label>Nome do Estabelecimento</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Endereço</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Valor por kWh</label>
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Descrição</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="confirm-button">Confirmar</button>
      </form>
    </div>
  );
};

export default AddEstablishment;
