import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import StepperForm from 'pages/stepper-form/index';
import Home from 'pages/home';

export default function MainRouter(props) {

  return (
      <div>             
          <Switch>
            <Route exact path="/" component={StepperForm} />                        
            <Route exact path="/home" component={Home} />                                           
            <Route exact path="/formik" component={StepperForm} />            
          </Switch>               
      </div>
  );
}