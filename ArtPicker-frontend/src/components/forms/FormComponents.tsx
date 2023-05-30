import styled from "styled-components";
import { StyledComponent } from "styled-components";

export const Board: StyledComponent<"div", any, {}, never> = styled.div`
margin-top: -30px;
margin-bottom: 30px;
min-height: 680px;
min-width: 400px;
width: 60vw;
height: 80vh;
background-color: #0c0c0c;
padding: 20px;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
form{
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    font-size: 30px;
    color: white;
  }
  input{
    margin-top: 8px;
    width: 300px;    
    height: 25px;
    border-radius: 5px;
    font-size: 18px;
    ::placeholder {
      text-align: center;
    }
  }
  label{
    margin-top: 8px;
    height: 25px;
    width: 302px;
    max-width:400px;
    font-weight: 700;
    font-size: 25px;
    text-align: center;
    background-color: #fdfdfd;
    border-radius: 5px;
    transition: all .5s ease-in-out;
    :hover{
      cursor: pointer;
      background-color: gray;
    }
  }
  button{
    margin-top: 12px;
    width: 300px;
    max-width:400px;
    height: 45px;
    font-weight: 700;
    font-size: 30px;
    background-color: #fdfdfd;
    border-radius: 15px;
    transition: all .5s ease-in-out;
    :hover{
      cursor: pointer;
      background-color: gray;
    }
  }
  p{
    margin-top: 6px;
    color: #fdfdfd;
  }
  img{
    margin-top: 6px;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    object-fit: cover;
  }
}
a{
  margin-top: 8px;
  color: white;
}
`
export const PostBoard: StyledComponent<"div", any, {}, never> = styled.div`
margin-top: 10px;
margin-bottom: 30px;
min-height: 700px;
min-width: 800px;
margin-left: auto; 
margin-right: auto;
width: 60vw;
height: 80vh;
background-color: #0c0c0c;
padding: 20px;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
margin-left: 10px;
margin-right: 10px;
h2{
  font-size: 30px;
  color: #fdfdfd;
}
form{
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 700px;
  width: 500px;
  h1{
    font-size: 30px;
    color: white;
  }
  input{
    margin-top: 8px;
    width: 300px;    
    height: 25px;
    border-radius: 5px;
    font-size: 18px;
    ::placeholder {
      text-align: center;
    }
  }
  label{
    margin-top: 8px;
    height: 25px;
    width: 302px;
    max-width:400px;
    font-weight: 700;
    font-size: 25px;
    text-align: center;
    background-color: #fdfdfd;
    border-radius: 5px;
    transition: all .5s ease-in-out;
    :hover{
      cursor: pointer;
      background-color: gray;
    }
  }
  button{
    margin-top: 12px;
    width: 300px;
    max-width:400px;
    height: 45px;
    font-weight: 700;
    font-size: 30px;
    background-color: #fdfdfd;
    border-radius: 15px;
    transition: all .5s ease-in-out;
    :hover{
      cursor: pointer;
      background-color: gray;
    }
  }
}
a{
  margin-top: 8px;
  color: white;
}
`

export const Preview: StyledComponent<"div", any, {}, never> = styled.div`
height: 600px;
width: 450px;
margin-right: 35px;
display: flex;
justify-content: center;
align-items: center;
border: 1px;
border-style: solid;
border-color: white;

 p{
  color: #ebebeb;
  text-align: center;
 }
 img{
  height: 600px;
  width: 450px;
  object-fit: contain;
 }
`

export const Logo: StyledComponent<"img", any, {}, never> = styled.img`
width: 55vw;
object-fit: cover;
max-width:400px;
  @media screen and (max-height: 700px) {
    max-width:205px;
  }
`