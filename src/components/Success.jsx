import React from 'react';
import { Message } from 'semantic-ui-react'

const Success = ({ successMsg }) => {
    return (
        <Message positive>
            <Message.Header>  {successMsg}</Message.Header>
        </Message>
    )
}

export default Success
