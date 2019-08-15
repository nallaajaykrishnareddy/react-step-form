import React from "react";

const FormUserDetails = ({ nextStep, handleChange, values }) => {
  const handleContinue = e => {
    e.preventDefault();
    nextStep();
  };
  return (
    <div>
      <h5 className="mb-3">Details</h5>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Please Enter Name.."
          onChange={handleChange("name")}
          value={values.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Surname</label>
        <input
          type="text"
          name="surnmae"
          className="form-control"
          placeholder="Please Enter SurName.."
          onChange={handleChange("surname")}
          value={values.surname}
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">E-Mail</label>
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="Please Enter email.."
          onChange={handleChange("email")}
          value={values.email}
        />
      </div>
      <div>
        <button className="btn btn-primary btn-block" onClick={handleContinue}>
          continue
        </button>
      </div>
    </div>
  );
};

export default FormUserDetails;
