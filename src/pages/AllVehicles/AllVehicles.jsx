import './AllVehicles.css';
import carImage from '../../images/volvo-31.png';

const AllVehicles = () => {
  return (
    <div className="all-my-vehicles-container">
      <h2>TODOS MEUS VEÍCULOS</h2>
      <div className="vehicle-item">
        <img src={carImage} alt="Volvo S90" />
        <div>
          <h3>Volvo S90</h3>
          <p>ID: 4H9Z8D7J</p>
        </div>
      </div>
      
      <div className="vehicle-item">
        <img src={carImage} alt="Wolkswagen Nivus" />
        <div>
          <h3>Wolkswagen Nivus</h3>
          <p>ID: G2R5F9E7</p>
        </div>
      </div>
      
      <button className="add-vehicle-button">+</button>
    </div>
  );
};

export default AllVehicles;
