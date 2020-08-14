// Write your Character component here
import React from 'react';


function Character(props){
const {passingCharacterState} = props

return (

<div>
    
    <h2>Name: {passingCharacterState.name}</h2>
    <h3>Birthyear: {passingCharacterState.birth_year}</h3>
    <p>Gender: {passingCharacterState.gender}</p>
    <p>Height: {passingCharacterState.height} Inches</p>
    <p>Weight: {passingCharacterState.mass} Kilograms</p>
    <p>Eye Color: {passingCharacterState.eye_color}</p>
    <p>Hair Color: {passingCharacterState.hair_color}</p>

</div>

)

}

export default Character