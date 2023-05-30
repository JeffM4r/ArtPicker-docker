import styled from "styled-components";
import { StyledComponent } from "styled-components";

export const ImageContainer: StyledComponent<"div", any, {}, never> = styled.div`
margin-top: 10px;
min-height: 790px;
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
img{
  width: 60vw;
  height: 80vh;
  min-width: 800px;
  min-height: 790px;
  object-fit: contain;
}
`

export const ArtInfo: StyledComponent<"div", any, {}, never> = styled.div`
overflow-wrap: break-word;
margin-top: 10px;
width: 60vw;
min-width: 800px;
padding: 20px;
h1{
  font-weight: 700;
  font-size: 40px;
  color: #fdfdfd;
  margin-bottom: 10px;
}
h2{
  font-weight: 500;
  font-size: 25px;
  color: #fdfdfd;
  margin-bottom: 10px;
}
h3{
  font-weight: 500;
  font-size: 20px;
  color: #fdfdfd;
}
`

export const Comments: StyledComponent<"div", any, {}, never> = styled.div`
overflow-wrap: break-word;
width: 60vw;
padding: 20px;
min-width: 800px;
margin-bottom: 15px;
display: flex;
align-items: center;
background-color: #fdfdfd;
border-radius: 15px;
div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-right: 15px;
  border: black;
  border-right: solid;
  padding-right: 5px;
  img{
    margin-bottom: 5px;
  }
  p{
    width: 150px;
    height: fit-content;
  }
}
`

export const InformBoxForm: StyledComponent<"div", any, {}, never> = styled.div`
height: 95px;
width: 60vw;
background-color: #0c0c0c;
padding: 20px;
min-width: 800px;
margin-bottom: 30px;
border-radius: 15px;
display: flex;
justify-content: center;
align-items: center;
p{
  color: white;
  font-size: 30px;
}
`

export const CommentForm: StyledComponent<"form", any, {}, never> = styled.form`
height: 95px;
width: 60vw;
background-color: #0c0c0c;
padding: 20px;
min-width: 800px;
margin-bottom: 30px;
border-radius: 15px;
display: flex;
flex-direction: column;
align-items: end;
button{
  width: 200px;
  height: 30px;
  border-radius: 15px;
  background-color: #fdfdfd;
  font-size: 20px;
  :hover{
    cursor: pointer;
  }
}
input{
  width: 100%;
  margin-bottom: 8px;
  border-radius: 15px;
  height: 50px;
  font-size: 20px;
}
`