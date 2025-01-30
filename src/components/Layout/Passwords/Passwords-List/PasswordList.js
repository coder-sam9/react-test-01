import React from "react";
import PasswordListitem from "../Password-Listitem/PasswordListitem";

function PasswordList() {
  const dummy = [
    { title: "abc", password: 123 },
    { title: "xyz", password: 111 },
    { title: "new", password: 101 },
  ];

  return (
    <div>
      <h2>

      All Passwords
      </h2>
      {dummy.map((item, index) => (
        <PasswordListitem
          key={index} // Always add a key when mapping
          title={item.title}
          password={item.password}
          onDelete={() => console.log("to delete")}
          onEdit={() => console.log("to Edit")}
        />
      ))}
    </div>
  );
}

export default PasswordList;
