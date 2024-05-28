import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import EstablishmentRegistration from './pages/EstablishmentRegistration/EstablishmentRegistration'
import ChargingPointRegistration from './pages/ChargingPointRegistration/ChargingPointRegistration'
import ChargingPointEdit from './pages/ChargingPointEdit/ChargingPointEdit'
import ChargingPointDetails from './pages/ChargingPointDetails/ChargingPointDetails'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<EstablishmentRegistration />} />
        <Route path="/cadastrar-ponto-de-recarga"
          element={<ChargingPointRegistration />} />
        <Route path="/detalhes-ponto-recarga" element={<ChargingPointDetails />} />
        <Route path="/editar-ponto-de-recarga" element={<ChargingPointEdit />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
