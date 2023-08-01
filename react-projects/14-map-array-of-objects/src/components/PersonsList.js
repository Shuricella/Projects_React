import PersonCard from "./PersonCard.js";
import persons from "../date/persons.js";

const PersonsList =() => {
    return (
        <div className="cards-list">
            {persons.map( (person) => {
                // с помощью {...person} передаем все свойства текущего объекта при итерации
                return ( <PersonCard key={person.id}  {...person}  /> );
            } )}
        </div>
    );
         
    

};

export default PersonsList;