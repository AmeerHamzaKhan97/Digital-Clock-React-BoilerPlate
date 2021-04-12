import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.intervalId = null;
  }
  render() {
    return (
      <div className="Clock">
        <h3 id="time">{this.getDigitalTime()}</h3>
      </div>
    );
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
        this.setState({
            date:new Date()
        })

    }, 1*1000);
  }

  componentWillUnmount(){
      clearInterval(this.intervalId)
  }

  getDigitalTime() {
    const currentTime = this.state.date;
    const [hours, minutes, seconds] = [
      currentTime.getHours(),
      currentTime.getMinutes(),
      currentTime.getSeconds(),
    ];

    const amOrPm = hours >= 12 ? "PM" : "AM";
    const twelveHour = hours > 12 ? hours - 12 : hours;
    const hourTime = this.addTwoNumber(twelveHour);
    const mintueTime = this.addTwoNumber(minutes);
    const secondTime = this.addTwoNumber(seconds);

    const timeString = `${hourTime}:${mintueTime}:${secondTime} ${amOrPm}`;
    return timeString;
  }

  addTwoNumber(num) {
    return `${num < 10 ? "0" : ""}${num}`;
  }
}

export default App;
