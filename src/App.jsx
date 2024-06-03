import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import EstablishmentHome from './pages/EstablishmentHome/EstablishmentHome';
import Establishment from './pages/Establishment/Establishment'
import ChargingPointRegistration from './pages/ChargingPointRegistration/ChargingPointRegistration'
import ChargingPointEdit from './pages/ChargingPointEdit/ChargingPointEdit'
import ChargingPointDetails from './pages/ChargingPointDetails/ChargingPointDetails'
import AddEstablishment from './pages/AddEstablishment/AddEstablishment';
import ClientHome from './pages/ClientHome/ClientHome';
import AllVehicles from './pages/AllVehicles/AllVehicles';
import AvailableCharges from './pages/AvailableCharges/AvailableCharges';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EstablishmentHome />} />
        <Route path="/adicionar-estabelecimento"
          element={<AddEstablishment />} />
        <Route path="/estabelecimento"
          element={<Establishment />} />
        <Route path="/cadastrar-ponto-de-recarga"
          element={<ChargingPointRegistration />} />
        <Route path="/detalhes-ponto-recarga" element={<ChargingPointDetails />} />
        <Route path="/editar-ponto-recarga" element={<ChargingPointEdit />} />
                <Route path="/home" element={<ClientHome />} />
                <Route path="/todos-os-veiculos" element={<AllVehicles />} />
                <Route path="/recargas-disponiveis" element={<AvailableCharges />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
