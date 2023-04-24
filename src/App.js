import logo from './logo.svg';
import './App.css';

import Index from './components/Index'
import { Routes, Router, Route } from 'react-router-dom';
import ArtworkAll from './components/ArtworkAll';
import ArtworkInfo from './components/ArtworkInfo'
import ProgramInfo from './components/ProgramInfo';
import Reservation from './components/Reservation';
import ReservationList from './components/ReservatonList'
import ReservationInfo from './components/ReservationInfo';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/artworkall' element={<ArtworkAll/>}></Route>
        <Route path='/artworkinfo' element={<ArtworkInfo/>}></Route>
        <Route path='/programinfo' element={<ProgramInfo/>}></Route>
        <Route path='/reservation' element={<Reservation/>}></Route>
        <Route path='/reservationlist' element={<ReservationList/>}></Route>
        <Route path='/reservationinfo' element={<ReservationInfo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
