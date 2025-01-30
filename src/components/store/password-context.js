import React from "react";

const PasswordContext=React.createContext({
    totalPasswords:[],
    showPasswords:[],
    addItem:()=>{},
    removeItem:()=>{},
})
export default PasswordContext;