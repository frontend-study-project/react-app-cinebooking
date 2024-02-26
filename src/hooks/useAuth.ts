// 호출할 함수
import { useMutation, useQuery, QueryClient } from "@tanstack/react-query";
import { authApi, joinApi, loginApi } from "../data/auth";
import { JoinForm, LoginForm } from "../types";
import { useNavigate } from "react-router-dom";
import { USER_ERROR_CODE } from "../utils/errorcode";
import { setAuthorization } from "../data";
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
  const navigate = useNavigate();
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnReconnect: false,
        refetchOnWindowFocus: false,
        retry: 0,
      },
    }
  });
  return useMutation({
    mutationFn: (form: LoginForm) => {
      return loginApi(form)
    },
    onSuccess: ({token, user}) => {
      navigate('/');
      // 로그인 정보를 저장해주기위해 사용
      queryClient.setQueryData(["auth"], user);
      setAuthorization(token);
    },
    onError: ({message: errorCode}) => {
      if(USER_ERROR_CODE.USER_NOT_FOUND === errorCode) alert("아이디랑 비밀번호가 틀렸습니다.")
    }
  })
}

export const useFetchAuthQuery = () => {
  return useQuery({
    queryKey: ["auth"],
    queryFn: () => {
      return authApi();
    },
    staleTime: 3 * 24 * 3600 * 1000 // 토큰의 유효기간이 3일이기떄문에 staletime도 3일
  });
}