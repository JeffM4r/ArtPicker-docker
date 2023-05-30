import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "react-query";
import { getPost, sendComments, getAccessToken } from "../../services/ArtsApiContext";
import { PostBoard } from "../forms/FormComponents";
import { LoadingAnimation } from "../ImagesContainer/FrontPageStyledComponents";
import PostComments from "../comments/CommentsLoader";
import {
  ImageContainer,
  ArtInfo,
  CommentForm,
  InformBoxForm
} from "./PostStyledComponents";
import { useState, useEffect } from "react";
import { postResponseType, commentToSend } from "../types/types";

function PostContainer(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const tokenLocalStorage: string = localStorage.getItem('token') as string
  const [token, setToken] = useState<string>("")
  const [comment, setComment] = useState<{ comment: string }>({ comment: "" })
  const OneDayInMS: number = 86400000
  const { data, isLoading, error } = useQuery<postResponseType>([id], getPost, {
    refetchOnReconnect: true,
    retry: false,
    staleTime: OneDayInMS
  })
  const { data: accessToken } = useQuery<string>(tokenLocalStorage, getAccessToken, {
    refetchOnReconnect: false,
    retry: false,
    staleTime: OneDayInMS,
    onError: () => { localStorage.clear(); }
  })

  const { mutate, isLoading: isLoading2 } = useMutation<{ comment: string }, unknown, commentToSend>(sendComments, {
    onSuccess: () => { alert("Mensagem enviada"); window.location.reload(); },
    onError: () => { alert("Mensagem vazia, escreva algo"); }
  })

  useEffect(() => {
    setToken(tokenLocalStorage);
  }, [tokenLocalStorage])

  function handleUploadClick(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (isLoading2) { return };
    mutate({ ...comment, token: accessToken, id: id });
  };

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
        <ImageContainer >
          <img src={data.pictureLink} alt="" />
        </ImageContainer >
        <ArtInfo>
          <h1>Titulo: {data.title}</h1>
          <h2>Descrição: {data.subtitle}</h2>
          <h3>feito por: {data.users.userName}</h3>
        </ArtInfo>
        <PostComments id={data.id} />
        {token ?
          <CommentForm onSubmit={handleUploadClick}>
            <input placeholder="Escreva um comentário" type="text" required onChange={(e) => setComment({ ...comment, comment: e.target.value })} value={comment.comment} />
            <button>Enviar</button>
          </CommentForm>
          :
          <InformBoxForm>
            <p>Faça login para poder comentar</p>
          </InformBoxForm>
        }

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
        <h2>não foi possivel carregar os posts</h2>
      </PostBoard>
    </>
  );
}

export default PostContainer;