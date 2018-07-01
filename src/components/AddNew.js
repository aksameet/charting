import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createNew } from "../actions";

class AddNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field,
          className = `control ${touched && error ? "has-danger" : ""}`;

    return (
      <div className="column">
        <div className="field">
          <label className="label">{field.label}</label>
          <div className={className}>
            <input
              className="input"
              type="text"
              placeholder={field.placeholder}
              {...field.input}
            />
            <div className="validation-text">
              {touched ? error : ""}
            </div>
          </div>
        </div>
      </div>
    );
  }

  onSubmit(values) {

    let parsedValues = {
			name: values.name,
			F: parseInt(values.F, 10), 
			A: parseInt(values.A, 10), 
			Pts: parseInt(values.Pts, 10)
    }
    
    this.props.createNew(parsedValues, () => {
      this.props.history.push("/");
    });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Team Name"
          name="name"
          component={this.renderField}
          placeholder="Text input"
        />
        <Field
          label="Goals For"
          name="F"
          component={this.renderField}
          placeholder="Number"
        />
        <Field
          label="Goals Agains"
          name="A"
          component={this.renderField}
          placeholder="Number"
        />
        <Field
          label="Points"
          name="Pts"
          component={this.renderField}
          placeholder="Number"
        />
        <button type="submit" className="button is-link button-spacing">Submit</button>
        <Link to="/" className="button is-danger button-spacing">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = "Enter a team name";
  }
  if (!values.F || isNaN(values.F)) {
    errors.F = "Enter a number of goals scroed for";
  }
  if (!values.A || isNaN(values.A)) {
    errors.A = "Enter a number of goals scored against ";
  }
  if (!values.Pts || isNaN(values.Pts)) {
    errors.Pts = "Enter a number of points";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: "PostsNewForm"
})(connect(null, { createNew })(AddNew));
