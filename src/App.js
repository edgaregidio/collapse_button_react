import React, { useState, useRef } from "react";

import { Collapsible } from "./styles";

function App() {
  const [isOpen, setIsOpen] = useState(true);

  const parentRef = useRef();

  return (
    <Collapsible>
      <button
        type="button"
        className="toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        clica
      </button>
      <div
        className="content-parent"
        ref={parentRef}
        style={
          isOpen
            ? { height: `${parentRef.current.scrollHeight}px` }
            : { height: "0px" }
        }
      >
        {" "}
        mostrar componentes
      </div>
    </Collapsible>
  );
}

export default App;
