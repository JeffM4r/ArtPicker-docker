import { ChangeEvent, useState } from 'react';
import logo from "../../assets/Images/LoginScreenLogo.png";
import { Board, Logo } from './FormComponents';
import { useMutation } from 'react-query';
import { createAccount } from '../../services/ArtsApiContext';
import { SignupFormType, SignupFormTypetoSend } from '../types/types';
import { Link } from 'react-router-dom';
import { LoadingAnimation } from '../ImagesContainer/FrontPageStyledComponents';

function SignupForm(): JSX.Element {
  const [form, setForm] = useState<SignupFormType>({ userName: "", email: "", password: "", password2: "", image: "" });
  const { mutate, isLoading } = useMutation<null, unknown, SignupFormTypetoSend>(createAccount, {
    onSuccess: () => { alert("Conta criada com sucesso! vá para página de login"); },
    onError: () => { alert("Houve um erro nessa tentativa de cadastro, email ou nome de usuário pode estar em uso"); }
  })

  function handleImageChange(event: ChangeEvent<HTMLInputElement>): void {
    const image: FileList | null = event.target.files;
    if (image) {
      transformFile(image[0])
    }
  };

  function transformFile(file: File | null): void {
    const reader = new FileReader()

    if (file) {
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        if (reader.result) {
          setForm({ ...form, image: String(reader.result) });
        }
      }
    } else {
      setForm({ ...form, image: "" })
    }
  }

  function handleUploadClick(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (form.password !== form.password2) { alert("passwords digitados estão diferentes"); return };
    if (isLoading) { return };
    mutate({
      userName: form.userName,
      email: form.email,
      password: form.password,
      image: form.image
    });
  };

  if (isLoading) {
    return (
      <Board>
        <Logo src={logo} alt="logo" />
        <LoadingAnimation />
      </Board>
    )
  };

  return (
    <Board>
      <Logo src={logo} alt="logo" />
      <form onSubmit={handleUploadClick}>
        <h1>Criar Conta</h1>
        <input type="text" name='name' placeholder='Digite seu nick' onChange={(e) => setForm({ ...form, userName: e.target.value })} value={form.userName} required />
        <input type="email" name='email' placeholder='Digite seu email' onChange={(e) => setForm({ ...form, email: e.target.value })} value={form.email} required />
        <input type="password" name='password' placeholder='Digite sua senha' onChange={(e) => setForm({ ...form, password: e.target.value })} value={form.password} required />
        <input type="password" name='password confirm' placeholder='Digite sua senha novamente' onChange={(e) => setForm({ ...form, password2: e.target.value })} value={form.password2} required />
        {form.image ? <img src={form.image} alt="preview profile" /> : <p>Preview da imagem aparecerá aqui</p>}
        <label>
          <input style={{ display: "none" }} type="file" name='image' onChange={handleImageChange} required />
          Escolha sua imagem
        </label>
        <button name='sendFormButton' >Criar conta</button>
      </form>
      <Link to="/signin">Já tem uma conta? Entre agora!</Link>
    </Board>
  );
}

export default SignupForm;