import React from "react";
import NavBar from "./components/NavBar/NavBar";
import{action,Orginals,trending,RomanceMovies,ComedyMovies} from './urls'
import './App.css'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";


function App() {
  return (
    <div className="App">
    <NavBar/>
      <Banner/>  
      <RowPost url={Orginals} title='Netflix Orginals' />
      <RowPost url={action} title='Action'  isSmall />
      <RowPost url={trending} title='trending '  isSmall />
      <RowPost url={RomanceMovies} title='RomanceMovies'  isSmall />
      <RowPost url={ComedyMovies} title='ComedyMovies'  isSmall />
    </div>
  );
}

export default App;
