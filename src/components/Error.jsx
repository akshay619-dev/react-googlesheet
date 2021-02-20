import React from 'react';
import { Message } from 'semantic-ui-react'

const Error = ({ errorMsg }) => {
    return (

        <Message negative>
            <Message.Header>{errorMsg}</Message.Header>
        </Message>
    )
}

export default Error
