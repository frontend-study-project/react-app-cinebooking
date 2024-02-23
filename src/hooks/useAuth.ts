// 호출할 함수
import { useMutation } from "@tanstack/react-query";
import {joinApi, loginApi} from "../data/auth";
import {JoinForm, LoginForm} from "../types";
import { useNavigate } from "react-router-dom";
export const useJoinMutation = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: (form: JoinForm) => {
      return joinApi({
        ...form,
        nickname: form.userId
      })
    },
    onSuccess: () => {
      navigate('/login');
    },
    onError: () => {
      alert("중복된 아이디입니다!");
    }
  });
}

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (form: LoginForm) => {
      return loginApi(form)
    },
    onSuccess: () => {
      alert("로그인 성공")
    },
    onError: () => {
      alert("로그인 실패");
    }
  })
}