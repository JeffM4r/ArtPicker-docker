import styled from "styled-components";
import { StyledComponent } from "styled-components"
import { hiddenMenuProps } from "../types/types";

export const Menu: StyledComponent<"div", any, {}, never> = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 59px;
width: 70vw;
min-width: 800px;
color: #ebebeb;
position: relative;
`
export const Line: StyledComponent<"div", any, {}, never> = styled.div`
height: 1px;
width: 500vw;
background-color: #424141;
`
export const Top: StyledComponent<"header", any, {}, never> = styled.header`
position: fixed;
width: 100%;
left: 0;
top: 0;
right: 0;
background-color: #0c0c0c;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
z-index: 1;
`
export const ListMenu: StyledComponent<"ol", any, hiddenMenuProps, never> = styled.ol<hiddenMenuProps>`
position: absolute; 
margin-top: 137px;
background-color: #2e2e2e;
padding: 8px;
font-size: 20px;
right: 0;
border-bottom-left-radius: 30px;
transition: all .5s ease-in-out;
transform: ${(props) => (props.menuHidden ? "translateY(-50%) scaleY(0)" : "translateY(0%) scaleY(1)")};
a{
  text-decoration: none;
  color: white;
}
li{
  transition: color .5s ease-in-out;  
  text-align: right;
  margin-top: 10px;
  :hover{
      cursor: pointer;
      color: gray;
  }
}
`
export const Portrait: StyledComponent<"img", any, {}, never> = styled.img`
width: 50px;
height: 50px;
border-radius: 50px;
object-fit: cover;
:hover{
    cursor: pointer;
}
`
export const Image: StyledComponent<"img", any, {}, never> = styled.img`
height: 55px;
object-fit: cover;
`
export const LoginButton: StyledComponent<"button", any, {}, never> = styled.button`
height: 45px;
width: 100px;
font-weight: 700;
font-size: 30px;
background-color: #fdfdfd;
border-radius: 15px;
transition: all .5s ease-in-out;
:hover{
  cursor: pointer;
  background-color: gray;
}

`