import React from "react";
import styled from "styled-components";

export default function ResetButton({ reset,lock }) {
  return (
    <div className="text-center">
      <Button
        onClick={() => {
          reset();
        }}
      >
        {lock ? "RESET" : "Reset Game"}
      </Button>
    </div>
  );
}
const Button = styled.button`
  padding: 10px 300px;
  border: black;
  background-color: red;
  color: white;
`;
