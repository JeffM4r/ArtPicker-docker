import { useQuery } from "react-query";
import { getImages } from "../../services/ArtsApiContext";
import { PostBoard } from "../forms/FormComponents";
import { Link } from "react-router-dom";
import { initialPagePosts } from "../types/types";
import {
  Container,
  ImageContainer,
  LoadingAnimation
} from "./FrontPageStyledComponents";


function Content(): JSX.Element {
  const { data, isLoading, error } = useQuery<initialPagePosts[]>("artsUploaded", getImages)

  if (error) {
    return (
      <>
        <PostBoard>
          <h2>não foi possivel carregar os posts</h2>
        </PostBoard>
      </>
    );
  }
  if (data) {
    return (
      <>
        <Container>
          {data.map((imgs: any) => {
            return (
              <div key={imgs.id}>
                <Link to={`/post/${imgs.id}`} >
                  <ImageContainer src={imgs.pictureLink} />
                </Link>
              </div>
            )
          })}
        </Container>
      </>
    );
  }
  if (isLoading) {
    return (
      <>
        < PostBoard>
          <LoadingAnimation />
        </ PostBoard>
      </>
    );
  }
  return (
    <PostBoard>
      <h2>Sem contado com a API</h2>
    </PostBoard>
  );

};



export default Content;