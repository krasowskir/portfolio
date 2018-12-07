import React, { Component } from "react";
import MyCarousel from "./components/carousel/Carousel";
import Features from "./components/marketing/Features";
import { Container, Row } from "reactstrap";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <MyCarousel />
        </Container>
        <Features />
      </div>
    );
  }
}

export default App;
