import styled from "@emotion/styled";

export const HeaderWrapper = styled.header`
width: 100%;
padding: 15px 0;
display: flex;
align-items: center;
`
export const LogoBox = styled.div`
    display: flex;
    gap: 40px;
    `
export const HeaderLinkWrapper = styled.div`
width: 100%;
display: flex;
`
export const HeaderLink = styled.ul`
width: 100%;
display: flex;
gap: 20px;
list-style: none;
align-items: center;
li a{
    text-decoration: none;
    color: black;
}
`
export const Auth_buttons = styled.div`
width: 300px;
display: flex;
gap: 18px;
align-items: center;
button{
    padding: 10px 25px;
    border-radius: 15px;
    background-color: #000;
}
`
