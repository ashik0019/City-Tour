import React, {Component} from 'react';
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList/TourList";
import './App.css';



class App extends Component {
  render() {
    return (
        <main>
          <Navbar/>
          <TourList/>
        </main>
    );
  }
}

export default App;
