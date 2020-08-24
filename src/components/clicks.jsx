import React, { Component } from "react";

class Clicker extends Component {
  state = { count: 0, isToggle: true };

  //==============================
  //   Logic incrementing
  //==============================
  handleIncrement = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  //==============================
  //   Logic decrement
  //==============================

  handleDecrement = () => {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  };

  //==============================
  //   Toggle Button Logic
  //==============================

  // For the toggle button to work the state must be initialized as true
  // Then the setState should have an not operator which would change the state from true to false.

  handleToggle = () => {
    this.setState((state) => ({
      isToggle: !state.isToggle,
    }));
  };
  //===============================================
  //Other logics to change color and other details
  //===============================================
  buttonColor = () => {
    let classes = "btn btn-lg btn-";
    classes += this.state.isToggle === true ? "success" : "danger";
    return classes;
  };

  toggleText = () => {
    let text = "ON";
    if (this.state.isToggle === false) {
      text = "OFF";
    }
    return text;
  };

  render() {
    return (
      <div className="container">
        <h1>Event handling explained here</h1>
        <p> How should I start? Perhaps a button that keeps adding on click </p>

        <h1>Count : {this.state.count}</h1>
        <button
          className="btn btn-lg btn-success"
          onClick={this.handleIncrement}
        >
          Click me to add
        </button>
        <p>{""}</p>
        <p>
          <b>Explanation : </b>So What I did was to ask a button to raise an
          event. The button hit on the function and then it triggered a state
          change. To change the state, you always need to use the set state
          method. Also the code was a little complex in the documentation..
        </p>
        <p>{""}</p>
        <p>Now Let me try decrementing the same....</p>
        <button
          className="btn btn-lg btn-danger"
          onClick={this.handleDecrement}
        >
          Click to reduce
        </button>
        <p>{""}</p>
        <p>
          <b>Clear Explanation : </b>
          There are few things that you will need to keep in mind to understand
          this...
          <p>
            A state should always have an initial value. Only then making
            changes would make sense.
          </p>
          <p>
            You need to reference the proper state element using the
            this.state.element and add the logic to your code
          </p>
          <p>
            Initially you would need to create a constructor, bind the this
            keyword and then you would need to add super props and set the
            initial state which is reduced now
          </p>
          <p>Finally logic matters to set the state</p>
          <p>{""}</p>
          <h1>Toggle Button Logic</h1>
          <p>
            Here I have worked on a toggle button where I could enable and
            disable it...
          </p>
          <p>
            After some checks and understanding, toggle buttons were executed.
            BUt there is something that I wish to point here. the binding did
            not happen naturally.
          </p>
          <p>{""}</p>
          <button
            className={this.buttonColor()}
            onClick={() => this.handleToggle()}
          >
            {this.toggleText()}
          </button>
        </p>
      </div>
    );
  }
}

export default Clicker;
