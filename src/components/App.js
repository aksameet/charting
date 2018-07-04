import '../styles/App.css';
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setProcessedData } from "../actions/index";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      minimum: '',
      difference: [],
      names: [],
      scored_for: [],
      scored_against: [],
      points: []
    }
  }

  componentDidMount() {
    this.processData();
  }

  processData() {

    Array.min = ( array ) => {
      return Math.min.apply( Math, array );
    };

    let arr = [],
      minimum,
      names = [],
      scored_for = [],
      scored_against = [],
      points = [];

    this.props.teams.forEach((result) => {

      const { name, F, A, Pts } = result;

      let sum = Math.abs(F - A);
      arr.push(sum);
      minimum = Array.min(arr);
      names.push(name);
      scored_for.push(F);
      scored_against.push(A);
      points.push(Pts);
      
    });

    return this.setState({
      minimum,
      difference: arr,
      names,
      scored_for,
      scored_against,
      points
    })
  }

  renderTeams() {
    return this.props.teams.map((result, idx) => {
      let sum = Math.abs(result.F - result.A),
          className

      if (sum === this.state.minimum) {
        className = "smallest-difference";
      } else {
        className = "";
      };

      return (
        <tr key={idx} className={className} >
          <td>{result.name}</td>
          <td>{result.F}</td>
          <td>{result.A}</td>
          <td>{result.Pts}</td>
        </tr>
      )
    });
  }

  render() {
    return (
      <section className="section">
        <h1 className="title">Premier League results</h1>
        <p className="subtitle">
          Visualization of results <strong>with React</strong>!
        </p>
        <div className="columns">
          <div className="column">
            <Link className="button is-link button-spacing" 
                  to='/add-new'>
              Add result
            </Link>
            <Link className="button is-link button-spacing" 
                  to='/charts'
                  onClick={() => this.props.setProcessedData(this.state)}>
              Check Charts
            </Link>
          
            <table className="table">
              <thead>
                <tr>
                  <th>Team</th>
                  <th>Goals for</th>
                  <th>Goals against</th>
                  <th>Points</th>
                </tr>
              </thead>
              <tbody>
                {this.renderTeams()}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {
    teams: state.teams
  };
}

export default connect(mapStateToProps, { setProcessedData })(App);


