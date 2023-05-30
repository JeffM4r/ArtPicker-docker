import { useQuery } from "react-query";
import { getComments } from "../../services/ArtsApiContext";
import { PostBoard } from "../forms/FormComponents";
import { LoadingAnimation } from "../ImagesContainer/FrontPageStyledComponents";
import { Comments } from "../postContainer/PostStyledComponents";
import { Portrait } from "../headerMenu/HeaderStyledComponents";
import { comments } from "../types/types";


function PostComments({ id }: { id: number }): JSX.Element {
  const OneDayInMS: number = 86400000
  const { data, isLoading, error } = useQuery<comments[]>([id], getComments, {
    refetchOnReconnect: true,
    retry: false,
    staleTime: OneDayInMS
  })

  if (error) {
    return (
      <>
        <PostBoard>
          <h2>não foi possivel carregar o post</h2>
        </PostBoard>
      </>
    );
  }
  if (data) {
    return (
      <>
        {data.map((comment: any) => {
          return (
            <Comments key={comment.id}>
              <div>
                <Portrait src={comment.users.profilePictures[0].pictureLink} alt="" />
                <p>{comment.users.userName}</p>
              </div>
              <p>{comment.text}</p>
            </Comments>
          )
        })}
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
    <>
      <PostBoard>
        <h2>Sem conexão com a api</h2>
      </PostBoard>
    </>
  );
}

export default PostComments;