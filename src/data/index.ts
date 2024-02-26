// token을 사용하는 파일
import useStorage from "../hooks/useStorage";
export const setAuthorization = (token: string) => {
  useStorage().setStorage("token", token);
}

export const getAuthorization = () => {
  return useStorage().getStorage("token");
}
