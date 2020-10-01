import React, { createRef } from 'react';
import { Field, reduxForm } from 'redux-form'

const MyForm = (props) => {

    console.log(props)

    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name="firstName"
                component="input"
                type="text"
                placeholder="Type your name"
            />
            <br />
            <Field
                name="age"
                component="input"
                type="number"
                placeholder="Type your age"
            />
            <button type="submit">Submit</button>
        </form>
    )

}

const withReduxForm = reduxForm({
    form: 'myForm'
})

export default withReduxForm(MyForm);   