import React from "react";

const FormPersonalDetails = ({ nextStep, prevStep, handleChange, values }) => {
  const handleContinue = e => {
    e.preventDefault();
    nextStep();
  };
  const handlePrevious = e => {
    e.preventDefault();
    prevStep();
  };
  return (
    <div>
      <h1>FormPersonalDetails</h1>
      <div className="form-group">
        <label htmlFor="occupation">Occupation</label>
        <input
          type="text"
          name="occupation"
          className="form-control"
          placeholder="Please Enter Occupation.."
          onChange={handleChange("occupation")}
          value={values.occupation}
        />
      </div>
      <div className="form-group">
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          className="form-control"
          placeholder="Please Enter City.."
          onChange={handleChange("city")}
          value={values.city}
        />
      </div>
      <div className="form-group">
        <label htmlFor="bio">Bio</label>
        <input
          type="text"
          name="bio"
          className="form-control"
          placeholder="Please Enter bio.."
          onChange={handleChange("bio")}
          value={values.bio}
        />
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

export default FormPersonalDetails;
