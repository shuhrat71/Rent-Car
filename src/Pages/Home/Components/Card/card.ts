import styled from "@emotion/styled";
export const RentBtn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 15px;
  margin-bottom: 15px;
  button {
    width: 100%;
    color: #000;
    padding: 15px 89px;
    font-weight: 800;
    font-size: 17px;
    border: 1px solid #000;
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
  padding-top: 20px;
  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
