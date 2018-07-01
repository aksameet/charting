import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import BarChart from "./charts/BarChart";
import LineChart from "./charts/LineChart";

class Charts extends Component {
  render() {
    return (
      <div>
        <Link className="button is-link button-spacing" to="/">
          Back To Table
        </Link>
        <BarChart data={this.props.processedData}/>
        <LineChart data={this.props.processedData}/>
      </div>
    );
  }
}

function mapStateToProps( {processedData} ) {
  return {
    processedData
  }
}
  
export default connect(mapStateToProps)(Charts);