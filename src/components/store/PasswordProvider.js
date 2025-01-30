import React, { useContext, useState } from "react";
import PasswordContext from "./password-context";

function PasswordProvider(props) {
  const [totalPasswords, setTotalPasswords] = useState([]);
  const addItemHandler = (item) => {
    item.id = Math.random().toFixed(4) * 1000;
    setTotalPasswords((totalPasswords) => {
      return [...totalPasswords, item];
    });
  };
  const removeItemHandler = (id) => {
    setTotalPasswords((prevPasswords) =>
      prevPasswords.filter((item) => item.id !== id)
    );
  };
  const intitialValues = {
    totalPasswords: totalPasswords,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <PasswordContext.Provider value={intitialValues}>
      {props.children}
    </PasswordContext.Provider>
  );
}

export default PasswordProvider;
