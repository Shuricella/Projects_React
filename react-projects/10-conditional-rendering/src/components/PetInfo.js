function PetInfo(props) {
    console.log("props=", props);

    const {animal, age, hasPet} = props;

    return (
        hasPet ? <h1>My {animal} is {age} yers old</h1> : <h2>I don't have animal</h2>
        )
            
}

export default PetInfo;