import React, {Component} from 'react';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      name: "",
      position: "",
      phone: "",
      submitted: false
    }
  }

  handleChange=(event)=>{
    this.setState({
      [event.target.id] : event.target.value
    })
  }
  
  handleSubmit=(event)=> {
    event.preventDefault();
    this.setState({submitted:true})
  }

  render(){
    const length = this.state.name.length
    const weight = length < 20 ? "weight-regular" :  "lighter"
    const size = length < 30 ? "font-regular" : length < 40 ? "smaller" : "smallest"
    const showCard = this.state.submitted ? "display" : "display-none"
    return (
      <div className="App">
        <header className="App-header">
          Explanation here
        </header>
        <p>Or explanation here. Or both. Whatever.</p>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <label>
            Name:
            <input type="text" id="name" value={this.state.name} onChange={(e) => this.handleChange(e)}/>
          </label>
          <label>
            Position:
            <input type="text" id="position" value={this.state.position} onChange={(e) => this.handleChange(e)}/>
          </label>
          <label>
            Phone Number:
            <input type="text" id="phone" value={this.state.number} onChange={(e) => this.handleChange(e)}/>
          </label>
          <input type="submit" value="Submit" className="submit-btn"/>
        </form>
        <div className={`${showCard} sigature-card`}>
          <div className={`display-name ${weight} ${size}`}>{this.state.name}</div>
          <div className="display-position">{this.state.position}</div>
          <div className="display-number">{this.state.phone}</div>
        </div>
      </div>
    );
  }
}

export default App;
