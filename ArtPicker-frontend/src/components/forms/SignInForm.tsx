import { useState } from 'react';
import logo from "../../assets/Images/LoginScreenLogo.png";
import { Board, Logo } from './FormComponents';
import { SigninFormType, LoginResponse, profile } from '../types/types';
import { useMutation } from 'react-query';
import { signin, getUser } from '../../services/ArtsApiContext';
import { useNavigate, Link } from 'react-router-dom';
import { LoadingAnimation } from '../ImagesContainer/FrontPageStyledComponents';
import { NavigateFunction } from 'react-router-dom';

function SigninForm(): JSX.Element {
  const [form, setForm] = useState<SigninFormType>({ email: "", password: "" });
  const [accessToken, setAccessToken] = useState<string>("");
  let navigate: NavigateFunction = useNavigate();

  const { mutate, isLoading } = useMutation<LoginResponse, unknown, SigninFormType>(signin, {
    onSuccess: (data) => { localStorage.setItem("token", data.refreshToken); mutateProfile(data.accessToken); setAccessToken(data.accessToken) },
    onError: () => { alert("Houve um erro nessa tentativa de login, email ou senha incorretos"); }
  })

  const { mutate: mutateProfile, isLoading: isLoading2 } = useMutation<profile, unknown, string>(accessToken, getUser, {
    onSuccess: (data) => { localStorage.setItem("profile", data.profilePictures[0].pictureLink); alert("Login Concluido"); navigate("/") }
  })

  function handleUploadClick(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (isLoading) { return };
    mutate(form);
  };


  if (isLoading || isLoading2) {
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
        <input type="email" name='email' placeholder='Digite seu email' onChange={(e) => setForm({ ...form, email: e.target.value })} value={form.email} required />
        <input type="password" name='password' placeholder='Digite sua senha' onChange={(e) => setForm({ ...form, password: e.target.value })} value={form.password} required />
        <button name='sendFormButton' >Acessar conta</button>
      </form>
      <Link to="/signup">Primeira vez? Cadastre-se!</Link>
    </Board>
  );
}

export default SigninForm;