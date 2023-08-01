function PetInfo(props) {
    console.log("props=", props);
    const {animal, age} = props
    return <h1>My {animal} is {age} yers old</h1>
}

export default PetInfo;