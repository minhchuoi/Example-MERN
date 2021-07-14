import styled from "styled-components";

export const CardStyle = styled.div`
  padding: 10px;
  text-align: center;
  background-color: #fff;
  border-radius: 0.4rem;
  overflow: hidden;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  /* cursor: pointer; */
  transition: 0.2s;
  :hover {
    transform: translateY(-0.5%);
    box-shadow: 0 4rem 8rem rgba(0, 0, 0, 0.5);
  }

  .header {
    font-size: 1rem;
    font-weight: 500;
    color: #0d0d0d;
    margin-bottom: 1.5rem;
  }

  .heartFalse-yes {
    display: inline-block;
    cursor: pointer;
  }
  .heartTrue-no {
    display: none;
  }
  .heartFalse-no {
    display: none;
  }
  .heartTrue-yes {
    cursor: pointer;
    display: inline-block;
  }
  p {
    display: inline-block;
  }
`;
