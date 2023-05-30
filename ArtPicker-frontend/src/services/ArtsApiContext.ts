import { QueryFunctionContext } from "react-query";
import {
  comments,
  initialPagePosts,
  SignupFormTypetoSend,
  SigninFormType,
  LoginResponse,
  PostFormTypeWithToken,
  postFromApi, profile,
  postResponseType,
  commentToSend
} from "../components/types/types";

const BaseURL: string = "/api"

export async function getImages(): Promise<initialPagePosts[]> {
  const result = await fetch(`${BaseURL}/posts`, {
    method: "GET",
  });

  if (result.status > 399) {
    throw new Error(`error ${result.status}`);
  };

  return result.json();
}

export async function createAccount(userData: SignupFormTypetoSend): Promise<null> {
  const result = await fetch(`${BaseURL}/auth/signup`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(userData)
  });

  if (result.status > 399) {
    throw new Error(`error ${result.status}`);
  };

  return result.json();
}

export async function signin(userData: SigninFormType): Promise<LoginResponse> {
  const result = await fetch(`${BaseURL}/auth/signin`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json"
    }),
    body: JSON.stringify(userData)
  });

  if (result.status > 399) {
    throw new Error(`error ${result.status}`);
  };

  return result.json();
}

export async function sendPost(postData: PostFormTypeWithToken): Promise<postFromApi> {
  const result = await fetch(`${BaseURL}/posts`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${postData.token}`
    }),
    body: JSON.stringify({
      title: postData.title,
      subtitle: postData.subtitle,
      image: postData.image
    })
  });

  if (result.status > 399) {
    throw new Error(`error ${result.status}`);
  };

  return result.json();
}

export async function getAccessToken({ queryKey }: QueryFunctionContext): Promise<string> {
  const result = await fetch(`${BaseURL}/auth/token`, {
    method: "POST",
    headers: new Headers({
      "Authorization": `Bearer ${queryKey[0]}`
    }),
  });

  if (result.status > 399) {
    throw new Error(`error ${result.status}`);
  };

  return result.text();
}

export async function getUser(token: string): Promise<profile> {
  const result = await fetch(`${BaseURL}/auth/user`, {
    method: "GET",
    headers: new Headers({
      'Authorization': `Bearer ${token}`
    })
  });

  if (result.status > 399) {
    throw new Error(`error ${result.status}`);
  };

  return result.json();
}

export async function getPost({ queryKey }: QueryFunctionContext): Promise<postResponseType> {
  const result = await fetch(`${BaseURL}/posts/${queryKey[0]}`, {
    method: "GET",
  });

  if (result.status > 399) {
    throw new Error(`error ${result.status}`);
  };

  return result.json();
}

export async function getComments({ queryKey }: QueryFunctionContext): Promise<comments[]> {
  const result = await fetch(`${BaseURL}/comments/${queryKey[0]}`, {
    method: "GET",
  });

  if (result.status > 399) {
    throw new Error(`error ${result.status}`);
  };

  return result.json();
}

export async function sendComments(commentData: commentToSend): Promise<{ comment: string }> {
  console.log(commentData)
  const result = await fetch(`${BaseURL}/comments/${commentData.id}`, {
    method: "POST",
    headers: new Headers({
      "Content-Type": "application/json",
      "Authorization": `Bearer ${commentData.token}`
    }),
    body: JSON.stringify({ comment: commentData.comment })
  });

  if (result.status > 399) {
    throw new Error(`error ${result.status}`);
  };

  return result.json();
}