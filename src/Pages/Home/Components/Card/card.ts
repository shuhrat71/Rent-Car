import styled from "@emotion/styled";

export const CardBody = styled.div`
  max-width: 380px;
  min-width: 340px;
  background-color: red;
  img {
    width: 100%;
  }
`;
export const chevroletlogo = styled.div`
  width: 100px;
`;
export const RentBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffef62;
  button {
    color: #000;
    padding: 10px 25px;
    font-weight: 800;
    font-size: 17px;
  }
  button:hover {
    color: #ffef62;
    border: 0 solid black;
    background-color: #000;
  }
`;
export const NoData = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
