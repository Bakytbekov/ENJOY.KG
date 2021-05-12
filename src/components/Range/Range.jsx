import React from "react";
import { Range, getTrackBackground } from "react-range";

const STEP = 1;
const search = new URLSearchParams(window.location.search)


export default class CustomRange extends React.Component {
  state = {
    // values: [50],
    // minPrice: this.props.tours[0].price,
    minPrice: 0,
    maxPrice: 60000,
    currentPrice: [+search.get(`price_gte`) || 0]
  };
  render() {
      const search = new URLSearchParams(this.props.history.location.search)
      console.log(this.state.currentPrice)
    this.props.tours.forEach(tour => {
      if (tour.price < this.state.minPrice) {
        // this.setState({ ...this.state, minPrice: tour.price })
      }
      if (tour.price > this.state.maxPrice) {
        this.setState({ ...this.state, maxPrice: tour.price - 10 })
      }
    })
    
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "2em"
        }}
      >
        <Range
          values={this.state.currentPrice}
          step={STEP}
          min={this.state.minPrice}
          max={this.state.maxPrice}
          // onChange={changePrice}
          onChange={(value) => {
            this.setState({ ...this.state, currentPrice: value })
            this.props.getProductsByFilters(`price_gte`, value)
          }}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "100%"
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: this.state.currentPrice,
                    colors: ["#548BF4", "#ccc"],
                    min: this.state.minPrice,
                    max: this.state.maxPrice
                  }),
                  alignSelf: "center"
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "42px",
                width: "42px",
                borderRadius: "4px",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA"
              }}
            >
              <div
                style={{
                  height: "16px",
                  width: "5px",
                  backgroundColor: isDragged ? "#548BF4" : "#CCC"
                }}
              />
            </div>
          )}
        />
        <output style={{ marginTop: "30px" }} id="output">
          {this.state.currentPrice[0].toFixed(1)}
        </output>
      </div>
    );
  }
}