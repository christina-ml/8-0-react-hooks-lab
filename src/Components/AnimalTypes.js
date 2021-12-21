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
    const isIncluded = this.state.animalTypes.includes(this.state.userInput);

    this.setState({
      animalTypes: !isIncluded ? [this.state.userInput, ...this.state.animalTypes] : this.state.animalTypes,
    })
  }

  handlePersonInput=(event)=>{
    this.setState({
      userInput: event.target.value.trim().toLowerCase()
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
        <li key={index}>{animal}
          <button 
            onClick={this.removeButton} 
            value={animal}
          >-
          </button>
        </li>
      )
    })

    return (
      <section className={"animal-types"}>
        <h4>Animal Types</h4>
        <form>
          <input 
            type="text" 
            id="animal-type"
            placeholder="type an animal" 
            value={ this.personInput }  
            onChange={ this.handlePersonInput }
          />
          <input onClick={this.handleSubmit} type="submit" />
        </form>
        <ol>{animalList}</ol>
      </section>
    );
  }
}

export default AnimalTypes;
