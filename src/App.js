import { useState } from "react";
import AddPassword from "./components/Layout/Passwords/Add-Password/AddPassword";
import Header from "./components/Layout/Header/Header";
import PasswordList from "./components/Layout/Passwords/Passwords-List/PasswordList";
import Button from "./components/UI/Button/Button";
import Input from "./components/UI/Input/Input";
import PasswordProvider from "./components/store/PasswordProvider";

function App() {
  const [showModal,setShowModal]=useState(false);
  const [searchText,setSearchText]=useState('');
  const [tempId,setTempId]=useState(0)
  const searchTextHandler=(value)=>{
    setSearchText(value);
  }
  const onEdit=(id)=>{
    setTempId(id)
    setShowModal(true)
  }
  return (
    <PasswordProvider className="App">
      <Header onAdd={()=>setShowModal(true)} onSearch={searchTextHandler}/>
      <main>
       {showModal&& <AddPassword onClose={()=>setShowModal(false)} id={tempId}/>}
        <PasswordList search={searchText} onEditId={onEdit}/>
      </main>
    </PasswordProvider>
  );
}

export default App;
