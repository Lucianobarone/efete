import React, { useState } from "react";
import { View } from "react-native";
import { register } from "../../redux/store/actions/users";
import Register from "./register";
import { useDispatch } from "react-redux";

export default ({ navigation }) => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dni, setDni] = useState(0);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  function usernameChange(text) {
    setUsername(text);
  }
  function firstNameChange(text) {
    setFirstName(text);
  }
  function lastNameChange(text) {
    setLastName(text);
  }
  function dniChange(text) {
    setDni(Number(text));
  }
  function passwordChange(text) {
    setPassword(text);
  }

  function handleSubmit() {
    dispatch(register(firstName, lastName, dni, password, username));
  }

  return (
    
      <Register
        usernameChange={usernameChange}
        firstNameChange={firstNameChange}
        lastNameChange={lastNameChange}
        dniChange={dniChange}
        passwordChange={passwordChange}
        handleSubmit={handleSubmit}
        navigation={navigation}
      />
    
  );
};
