import React, { Component } from "react";
import MyCarousel from "./components/carousel/Carousel";
import Features from "./components/marketing/Features";
import MyNavbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Container, Row } from "reactstrap";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
        <Container>
          <MyCarousel />
        </Container>
        <Features />
        <Footer />
      </div>
    );
  }
}

export default App;
