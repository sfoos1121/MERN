import React from "react";

class UserBirthday extends Component {

  constructor(props) {
    super(props);
      this.state = {
        increaseAge: this.props.age
    };
}

render() {
  const {lastName, firstName} = this.props;

  return (
    <div className="UserBirthday">
      <hi>{lastName}, {firstName}</hi>
        <p>Age: {this.state.increaseAge}</p>
        <p>Hair color: {this.props. hairColor}</p>
        <button onClick={ () => { this.setState({ increaseAge: this.state.increaseAge += 1 }) }}> Birthday Button for {firstName} {lastName}</button>
    </div>
    );
  }
}


export default App;
