// import React, { Component } from "react";
// import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";
// import car1 from "../../assets/car1.jpeg";
// import car2 from "../../assets/car2.jpeg";
// import car3 from "../../assets/car3.jpeg";

// const items = [
//   {
//     src: car1,
//     altText: "auto 1",
//     caption: "auto 1"
//   },
//   {
//     src: car2,
//     altText: "auto 2",
//     caption: "auto 2"
//   },
//   {
//     src: car3,
//     altText: "auto 3",
//     caption: "auto 3"
//   }
// ];

// export default class MyCarousel extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeIndex: 0
//     };
//     this.next = this.next.bind(this);
//     this.prev = this.prev.bind(this);
//     this.goToIndex = this.goToIndex.bind(this);
//     this.onExiting = this.onExiting.bind(this);
//     this.onExited = this.onExited.bind(this);
//   }

//   componentDidMount() {}

//   next() {
//     if (this.animating) return;
//     const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
//     this.setState({ activeIndex: nextIndex });
//   }

//   prev() {
//     if (this.animating) return;
//     const prevIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
//     this.setState({ activeIndex: prevIndex });
//   }

//   onExiting() {
//     this.animating = true;
//   }

//   onExited() {
//     this.animating = false;
//   }
//   goToIndex(newIndex) {
//     if (this.animating) return;
//     this.setState({ activeIndex: newIndex });
//   }

//   render() {
//     let { activeIndex } = this.state;
//     const slides = items.map(item => {
//       return (
//         <CarouselItem key={item.src} onExiting={this.onExiting} onExited={this.onExited}>
//           <img src={item.src} alt={item.altText} />
//           <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
//         </CarouselItem>
//       );
//     });
//     return (
//       <Carousel activeIndex={activeIndex} next={this.next} previous={this.prev}>
//         <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
//         {slides}
//         <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.prev} />
//         <CarouselControl direction="next" directionText="Next" onClickHandler={this.prev} />
//       </Carousel>
//     );
//   }
// }

import React, { Component } from "react";
import car1 from "../../assets/car1.jpeg";
import car2 from "../../assets/car2.jpeg";
import car3 from "../../assets/car3.jpeg";
import "./style.css";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from "reactstrap";

const items = [
  {
    src: car1,
    altText: "Slide 1",
    caption: "Slide 1"
  },
  {
    src: car2,
    altText: "Slide 2",
    caption: "Slide 2"
  },
  {
    src: car3,
    altText: "Slide 3",
    caption: "Slide 3"
  }
];

class Example extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map(item => {
      return (
        <CarouselItem onExiting={this.onExiting} onExited={this.onExited} key={item.src} className="carousel-item">
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel activeIndex={activeIndex} next={this.next} previous={this.previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}

export default Example;
