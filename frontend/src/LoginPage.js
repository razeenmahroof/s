import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginPage.css';
import CarouselComponent from './CarouselComponent';
import LoginForm from './LoginForm';

const LoginPage = () => {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 carousel-container">
            <CarouselComponent />
          </div>
          <div className="col-md-6 login-container">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
