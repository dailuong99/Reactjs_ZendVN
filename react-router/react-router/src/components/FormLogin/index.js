import React from 'react';
import Input from '../shared/Input';
import Label from '../shared/Label';
import Button from '../shared/button';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function LoginForm() {
  return (
    <form action>
      <div className="form-control">
        <Label labelName='Username'></Label>
        <Input
          type='text'
          placeholder='Enter Username ...'
          value=""
        ></Input>
        <Label labelName='Password'></Label>
        <Input
          type='password'
          placeholder='Enter Password ...'
          value=""
        ></Input>

        <div className="d-flex tcl-jc-between tcl-ais-center">
          <Button variant="primary" size="large" type="button">Submit</Button>

          <Link 
               to="/register" 
               type="link" 
               variant="link"
               sizetext="textlarge"
          >Register</Link>
        </div>
      </div>
    </form>
  )
}