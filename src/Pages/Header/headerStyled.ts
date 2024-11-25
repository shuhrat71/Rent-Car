import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
  width: 100%;
  padding: 15px 20px;
  border-radius: 0 0 8px 8px;
  display: flex;
  align-items: center;
  background-color: aliceblue;
`;
export const LogoBox = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
export const HeaderLinkWrapper = styled.div`
  width: 100%;
  display: flex;
`;
export const HeaderLink = styled.ul`
  width: 100%;
  display: flex;
  gap: 20px;
  list-style: none;
  align-items: center;
  li a {
    text-decoration: none;
    color: black;
  }
`;
export const Auth_buttons = styled.div`
  width: 300px;
  display: flex;
  gap: 18px;
  align-items: center;
  button {
    padding: 10px 15px;
    border-radius: 15px;
    background-color: #000;
  }
`;
export const LogoGif = styled.div`
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
`;
