import { useEffect, useState } from "react";

function Form(props) {
    const [name, setName] = useState('');

    useEffect(() => {
        props.func()
    }, [name])

    return (
        <div className="form">
            <form className="search"></form>
            <input 
            type="text"
            onChange={(event) => setName(event.target.value)}
            placeholder="Find the country..."
            className="search__input"/>
        </div>
    );
}

export default Form;