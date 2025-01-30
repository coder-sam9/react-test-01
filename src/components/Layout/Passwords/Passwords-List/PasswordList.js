import React, { useContext } from "react";
import PasswordListitem from "../Password-Listitem/PasswordListitem";
import PasswordContext from "../../../store/password-context";

function PasswordList({search,onEditId}) {

  const passwordCtx=useContext(PasswordContext);
  const showPasswords=passwordCtx.totalPasswords.filter(item=>{
    return item.title.toLowerCase().includes(search.toLowerCase())
  })
  const onDelete=(id)=>{
    passwordCtx.removeItem(id)
  }
  const onEdit=(item)=>{
    onEditId(item.id);

  }
  return (
    <div>
      <h2>

      All Passwords
      </h2>
      {showPasswords.map((item, index) => (
        <PasswordListitem
          key={index} // Always add a key when mapping
          title={item.title}
          password={item.password}
          id={item.id}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}

export default PasswordList;
