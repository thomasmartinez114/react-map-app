import logo from './logo.svg';
import './App.css';
import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer } from 'react-leaflet';

function App() {
  return (
    <MapContainer center={[41.824, 71.4128]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
    </MapContainer>
  );
}

export default App;
