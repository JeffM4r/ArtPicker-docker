import { ChangeEvent, useState } from 'react';
import { PostBoard, Preview } from './FormComponents';
import { PostFormType, PostFormTypeWithToken, postFromApi } from '../types/types';
import { sendPost, getAccessToken } from '../../services/ArtsApiContext';
import { useMutation, useQuery } from 'react-query';
import { useNavigate, Link } from 'react-router-dom';
import { LoadingAnimation } from '../ImagesContainer/FrontPageStyledComponents';
import { NavigateFunction } from 'react-router-dom';

function PostForm(): JSX.Element {
  const OneDayInMS: number = 86400000
  const [form, setForm] = useState<PostFormType>({ title: "", subtitle: "", image: "" });
  const refreshToken: string = localStorage.getItem('token') as string
  const navigate: NavigateFunction = useNavigate();
  const { data, error, isLoading: isLoading2 } = useQuery<string>(refreshToken, getAccessToken, {
    refetchOnReconnect: false,
    retry: false,
    staleTime: OneDayInMS,
    onError: () => { localStorage.clear(); }
  })
  const { mutate, isLoading } = useMutation<postFromApi, unknown, PostFormTypeWithToken>(sendPost, {
    onSuccess: (data) => { alert("Post Concluído"); navigate(`/post/${data.id}`) },
    onError: () => { alert("Ocorreu um erro, tente novamente"); }
  })

  function handleImageChange(event: ChangeEvent<HTMLInputElement>): void {
    const image: FileList | null = event.target.files;
    if (image) {
      transformFile(image[0])
    }
  };

  function transformFile(file: File | null): void {
    const reader: FileReader = new FileReader()

    if (file) {
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        if (reader.result) {
          setForm({ ...form, image: String(reader.result) })
        }
      }
    } else {
      setForm({ ...form, image: "" })
    }
  }

  function handleUploadClick(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (isLoading) { return };
    mutate({ ...form, token: data });
  };

  if (error) {
    return (
      <PostBoard>
        <Link to="/signin">Erro, faça o login</Link>
      </PostBoard>
    )
  }

  if (isLoading || isLoading2) {
    return (
      <PostBoard>
        <LoadingAnimation />
      </PostBoard>
    )
  }

  return (
    <>
      <PostBoard>
        <Preview>
          {form.image ? <img src={form.image} alt="preview post" /> : <p>Preview da imagem aparecerá aqui</p>}
        </Preview>
        <form onSubmit={handleUploadClick}>
          <h1>Criar Post</h1>
          <input type="text" name='name' placeholder='Digite o Titulo' onChange={(e) => setForm({ ...form, title: e.target.value })} value={form.title} required />
          <input type="text" name='name' placeholder='Digite a Descrição' onChange={(e) => setForm({ ...form, subtitle: e.target.value })} value={form.subtitle} required />
          <label>
            <input style={{ display: "none" }} type="file" name='image' onChange={handleImageChange} required />
            Escolha sua imagem
          </label>
          <button name='sendFormButton' >Criar Post</button>
        </form>
      </PostBoard>
    </>
  );
}

export default PostForm;