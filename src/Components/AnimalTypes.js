import React from "react";
import "./AnimalTypes.css";

const animalTypes = ["dog", "cat", "ferret", "bird", "fish", "snake", "lizard"];

class AnimalTypes extends React.Component {
  constructor(){
    super();

    this.state = {
      animalTypes: animalTypes,
      userInput: '',
    }
  }

  handleSubmit=(event)=>{
    event.preventDefault();

    console.log('user input:', this.state.userInput)

    this.setState({
      animalTypes: [...animalTypes, this.state.userInput],
    })
  }

  handlePersonInput=(event)=>{
    this.setState({
      userInput: event.target.value
    })
  }

  removeButton=(event)=>{
    const { animalTypes } = this.state;
    const { value } = event.target;

    const filteredArr = animalTypes.filter((animal)=>{
      return animal !== value;
    })

    this.setState({
      animalTypes: filteredArr,
    })
  }

  render() {
    const animalList = this.state.animalTypes.map((animal, index)=>{
      return (
        <div key={index}>
          <li>{animal}
            <button 
              onClick={this.removeButton} 
              value={animal}
            >-
            </button>
          </li>
        </div>
      )
    })

    return (
      <section className={"animal-types"}>
        <h4>Animal Types</h4>
        <form onClick={this.handleSubmit}>
          <input 
            type="text" 
            id="animal-type"
            placeholder="type an animal" 
            value={ this.personInput }  
            onChange={ this.handlePersonInput }
          />
          <input type="submit" />
        </form>
        <ol>{animalList}</ol>
      </section>
    );
  }
}

export default AnimalTypes;
