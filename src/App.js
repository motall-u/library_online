import React, { Component } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './components/SearchBar';

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
          {/* Dynamic Content */}
          {/* <div className="container-fluid"> */}
              <SearchBar />
          {/* </div> */}
          {/* ---------------End dynamic content ------------*/}
        {/* Start Footer */}
        <Footer />
        {/* --------------End Footer--------------------------*/}

      </div>
    )
  }
}

export default App
