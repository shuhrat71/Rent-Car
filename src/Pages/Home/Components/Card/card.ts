import styled from "@emotion/styled";
export const RentBtn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  button {
    width: 100%;
    color: #000;
    padding: 15px 89px;
    font-weight: 800;
    font-size: 17px;
  }
  button:hover {
    color: #fff;
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
export const CarDetail = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
