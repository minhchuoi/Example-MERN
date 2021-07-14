import styled from "styled-components";

interface Props {
  display?: string;
}

export const ModalStyle = styled.div<Props>`
  position: absolute;
  z-index: 4;
  left: 0px;
  top: 0px;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vmax;
  padding-top: 80px;
  display: ${(props) => (props.display === "modalTrue" ? "block" : "none")};

  .btn {
    display: block;
    width: 100%;
    padding: 20px;
    font-size: 20px;
    text-align: center;
    color: #3363ff;
    background-color: #d8e0fd;
    border: none;
    border-radius: 0.4rem;
    transition: 0.2s;
    cursor: pointer;
    letter-spacing: 0.1rem;
  }
  .modalTrue {
    width: 200px;
    height: 200px;
    background-color: white;
    border: 1px solid #888;
    width: 70%;
    margin: auto;
    opacity: 1;
  }
`;
