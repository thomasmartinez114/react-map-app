import logo from './logo.svg';
import './App.css';
import 'leaflet/dist/leaflet.css';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function App() {
  const markers = [
    {
      geocode: [48.86, 2.3522],
      popUp: 'Hello, I am popup 1',
    },
    {
      geocode: [48.85, 2.3522],
      popUp: 'Hello, I am popup 2',
    },
    {
      geocode: [48.855, 2.34],
      popUp: 'Hello, I am popup 3',
    },
  ];

  // providence coordinates
  // 41.824, 71.4128

  return (
    <MapContainer center={[48.8566, 2.3522]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {/* <Marker position={[41.824, 71.4128]}>
        <Popup>My first Marker creation! - devtommie</Popup>
      </Marker> */}
      {markers.map(marker => (
        <Marker position={marker.geocode}></Marker>
      ))}
    </MapContainer>
  );
}

export default App;
