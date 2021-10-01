import React, { useContext } from "react";
import conterContext from "../Main/Context/ConterContext";

export default function Child(props) {
const conterValue = useContext(conterContext)
console.log(conterValue);
    return (
    <div>
      <p>This is child componend:{props.name}</p>
    </div>
  );
}
