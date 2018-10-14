import React from "react";
//import { AddTodo }from "./components/AddTOdo"

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "" };
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.title}
            onChange={this.handleChange}
            id="name1"
          />
          <input type="submit" value="Search!!" />
        </form>
      </div>
    );
  }
  handleChange = event => {
    const title = event.target.value;
    this.setState({ title: title });
    // console.log({ title });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.props.search(this.state.title);
    this.setState({ title: "" });
  };
}
