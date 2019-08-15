import React from "react";

const Confirm = ({ values, nextStep, prevStep }) => {
  const handleContinue = e => {
    e.preventDefault();
    nextStep();
  };
  const handlePrevious = e => {
    e.preventDefault();
    prevStep();
  };
  const { name, surname, email, bio, occupation, city } = values;
  return (
    <div>
      <h1>Confirm</h1>
      <div className="list-group">
        <div className="list-group-item list-group-item-action">
          Name: {"        "} {name}
        </div>
        <div className="list-group-item list-group-item-action">
          SurName: {"        "} {surname}
        </div>
        <div className="list-group-item list-group-item-action">
          Email: {"        "} {email}
        </div>
        <div className="list-group-item list-group-item-action">
          Bio: {"        "} {bio}
        </div>
        <div className="list-group-item list-group-item-action">
          Occupation: {"        "} {occupation}
        </div>
        <div className="list-group-item list-group-item-action">
          City: {"        "} {city}
        </div>
      </div>
      <ul className="pagination">
        <li className="page-item">
          <button className="btn btn-block btn-info" onClick={handlePrevious}>
            prev
          </button>
        </li>
        <li className="page-item">
          <button className="btn btn-block btn-info" onClick={handleContinue}>
            next
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Confirm;
