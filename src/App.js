import { useState } from "react";
import AddPassword from "./components/Layout/Passwords/Add-Password/AddPassword";
import Header from "./components/Layout/Header/Header";
import PasswordList from "./components/Layout/Passwords/Passwords-List/PasswordList";
import Button from "./components/UI/Button/Button";
import Input from "./components/UI/Input/Input";

function App() {
  const [showModal,setShowModal]=useState(false)
  return (
    <div className="App">
      <Header onAdd={()=>setShowModal(true)}/>
      <main>
       {showModal&& <AddPassword onClose={()=>setShowModal(false)}/>}
        <PasswordList/>
      </main>
    </div>
  );
}

export default App;
