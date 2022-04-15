function Person(props) {
    const result = props.age > 18 ? 'please go vote!' : 'you must be 18'
    const name = props.name.length > 8 ? props.name.slice(0, 6) : props.name 
    const hobbies = props.hobbies.map(hobby => <li>{hobby}</li>)

    return (
        <div>
            <p>Learn some information about this person.</p>
            <p>{name}</p>
            <p>{props.age}</p>
            <h3>{result}</h3>
            <ul>
                Hobbies:
                {hobbies}
            </ul>
        </div>   
    )
}