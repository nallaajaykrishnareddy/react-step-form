import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserForm from "./components/UserForm";
const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="m-10">
          <div className="row">
            <div className="col-sm-5 offset-sm-2">
              <UserForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
