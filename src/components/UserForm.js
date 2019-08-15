import React, { useState } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";
const UserForm = () => {
  const [step, SetStep] = useState(1);
  const [name, SetName] = useState("");
  const [surname, SetSurName] = useState("");
  const [email, SetEmail] = useState("");
  const [occupation, SetOccupation] = useState("");
  const [city, SetCity] = useState("");
  const [bio, SetBio] = useState("");

  ///proceed to next step
  const nextStep = () => {
    SetStep(step + 1);
  };

  //previous step
  const prevStep = () => {
    SetStep(step - 1);
  };

  // Handle fields change
  const handleChange = input => e => {
    if (input === "name") {
      SetName(e.target.value);
    } else if (input === "surname") {
      SetSurName(e.target.value);
    } else if (input === "email") {
      SetEmail(e.target.value);
    } else if (input === "occupation") {
      SetOccupation(e.target.value);
    } else if (input === "city") {
      SetCity(e.target.value);
    } else if (input === "bio") {
      SetBio(e.target.value);
    }
  };
  const values = { name, surname, email, occupation, city, bio };
  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return (
        <Confirm
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 4:
      return <Success />;

    default:
      break;
  }
};

export default UserForm;
