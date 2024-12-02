import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  width: 100%;
  border-radius: 0 0 8px 8px;
  display: flex;
  align-items: center;
  z-index: 3;
  top: -20px;
`;
export const LogoBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  padding-left: 10px;
`;
export const HeaderLinkWrapper = styled.div`
  width: 100%;
  display: flex;
`;
export const HeaderLink = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: white;
    font-size: 30px;
    font-family: "Figtree", sans-serif;
  }
`;
export const Auth_buttons = styled.div`
  width: 300px;
  display: flex;
  padding-right: 10px;
  gap: 18px;
  align-items: center;
  justify-content: space-around;
  button {
    padding: 10px 15px;
    border-radius: 15px;
    background-color: #000;
  }
  button:hover {
    padding: 0 50px;
    border: 0 solid black;
    background-color: #ffeb3b;
    color: #000;
  }
`;
export const LogoGif = styled.div`
  padding: 10px;
  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
`;
