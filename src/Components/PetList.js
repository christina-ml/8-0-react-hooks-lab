import React from "react";
// import Pet from "./Pet";
import "./PetList.css";
import { useState, useEffect } from 'react';

// const BASE_URL = "http://localhost:5000/api";

const PetList=()=>{
  const [ animalData, setAnimalData ] = useState([])

  useEffect(()=>{
    fetchAnimalData();
  }, []);

  const fetchAnimalData=()=>{
    fetch("https://raw.githubusercontent.com/joinpursuit/resource-veterinarian-api/main/data/db.json")
      .then(res=>res.json())
      .then((data)=>{
        setAnimalData(data.pets)
      })
  }

    const petList = animalData.map((pet)=>{
      return (
        <div key={pet.id}>
          <h5>
            {pet.name}
            <br />
            {pet.breed}
            <br />
            {pet.kind}
          </h5>
        </div>
      )
    })

    return (
      <section className="pet-list">
        <h4>All Pets</h4>
        <article>{ petList }</article>
      </section>
    );
}

export default PetList;
