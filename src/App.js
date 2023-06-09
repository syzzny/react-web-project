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

import ScrollToTop from './components/ScrollToTop';
import { Dataprovider } from './context/DataContext';
import HeartArtwork from './components/HeartArtwork';

import { format } from 'date-fns';


function App() {
  const handleReserve = (selected, counter) => {
    console.log(`Selected: ${format(selected, 'PP')}, Counter: ${counter}`);
    // 예약 처리 로직 추가
  };

  return (
    <Dataprovider>
    <div className="App">
      <ScrollToTop/>
      
      <Routes>
        <Route path='/' element={<Index/>}></Route>
        <Route path='/artworkall' element={<ArtworkAll/>}></Route>
        <Route path='/artworkinfo' element={<ArtworkInfo/>}></Route>
        <Route path='/programinfo' element={<ProgramInfo/>}></Route>
        <Route path='/reservation' element={<Reservation/>}></Route>
        <Route path='/reservationlist' element={<ReservationList/>}></Route>
        <Route path='/reservationinfo' element={<ReservationInfo onReserve={handleReserve}/>}></Route>
        <Route path='/heartartwork' element={<HeartArtwork/>}></Route>
      </Routes>
    </div>
    </Dataprovider>
  );
}

export default App;
