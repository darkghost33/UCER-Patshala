import Typewriter from "typewriter-effect";

import React from "react";

function TypeWriter() {
  return (
    <div className="text-center fs-3" style={{ marginTop:'70px'}}>
      Welcome To
      <span style={{color:"#66ff33"}} >
        <Typewriter
          options={{
            strings: ["UCER Patshala", "Your Own Education Portal"],
            autoStart: true,
            loop: true,
          }}
        />
      </span>
    </div>
  );
}

export default TypeWriter;
