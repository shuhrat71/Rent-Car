import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const LogoWrapper = styled.div`
  padding: 10px;
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
`;
export const HeaderTitle = styled.div`
  h1 {
    font-size: 30px;
    color: #fff;
  }
`;
export const Auth_buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  button {
    padding: 10px 15px;
    border-radius: 15px;
    background-color: #000;
  }
  button:hover {
    border: 0 solid black;
    background-color: #ffeb3b;
    color: #000;
  }
`;
