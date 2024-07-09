import React from "react";
import styled from "styled-components";

export default function Board({ boxHandle, box_array }) {
  return (
    <BoardContainer>
      {box_array.map((box, i) => {
        return (
          <div
            className="box"
            key={i}
            ref={box}
            onClick={(e) => boxHandle(e, i)}
          ></div>
        );
      })}
    </BoardContainer>
  );
}

const BoardContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 100px 100px 100px;
  gap: 5px;
  margin-bottom: 10px;
  .box {
    height: 100px;
    width: 100px;
    background-color: white;
    border-radius: 50%;
    cursor: pointer;
    display: grid;
    place-items: center;
  }
  @media screen and (max-width: 490px) {
    grid-template-columns: 130px 130px 130px;
    .box {
      height: 130px;
      width: 130px;
    }
  }
  @media screen and (max-width: 420px) {
    grid-template-columns: 110px 110px 110px;
    .box {
      height: 110px;
      width: 110px;
    }
  }
  @media screen and (max-width: 360px) {
    grid-template-columns: 90px 90px 90px;
    .box {
      height: 90px;
      width: 90px;
    }
  }
`;
