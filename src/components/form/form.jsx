import React from 'react';


const MyForm = (props) => {
    const handleInputChange = () => {
        props.onInputChange();
    }

    return (    
        <div>
            <h1>{props.text}</h1>
            <input type="text" id="login" onChange={handleInputChange}/>
            <input type="text" id="password"/>
            <button className="submit" onClick={props.handleSubmit}>Submit</button>
        </div>
    )
}


export default MyForm;