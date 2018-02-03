import React from 'react'
import { Form, Button } from 'semantic-ui-react'

const LoginContainer = props => {
    <Form>
        <Form.Field fluid>
            <label>Email</label>
            <input placeholder='Email' />
        </Form.Field>
        <Form.Field fluid type='password'>
            <label>Password</label>
            <input placeholder='Password' />
        </Form.Field>
        <Button>Log In</Button>
    </Form>
}