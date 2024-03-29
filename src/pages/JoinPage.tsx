import { useForm, SubmitHandler } from "react-hook-form";
import { useJoinMutation } from "../hooks/useAuth";
import { JoinForm } from "../types";

const JoinPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<JoinForm>({ mode: "onChange" });
  const joinMutation = useJoinMutation();
  const onSubmit: SubmitHandler<JoinForm> = (data) => {
    joinMutation.mutate(data);
  }
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-gray-100 p-8 rounded shadow-md w-96">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-600">이메일</label>
            <input
              className="mt-1 p-2 w-full border rounded-md"
              id="email"
              type="text"
              placeholder="test@email.com"
              {...register("userId", {
                required: "이메일은 필수 입력사항입니다.",
                pattern: {
                  value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                  message: "이메일 형식에 맞지 않습니다"
                }
              })}
            />
            {errors.userId && <small className="text-xs text-red-500" role="alert">{errors.userId.message}</small>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-600">비밀번호</label>
            <input
              className="mt-1 p-2 w-full border rounded-md"
              id="password"
              type="password"
              placeholder="******"
              {...register("password", {
                required: "비밀번호는 필수 입력사항입니다.",
                minLength: {
                  value: 7,
                  message: "7자리 이상 비밀번호를 입력하세요."
                }
              })}
            />
            {errors.password && <small className="text-xs text-red-500" role="alert">{errors.password.message}</small>}
          </div>
          <div className="mb-4">
            <label htmlFor="passwordCheck" className="block text-sm font-medium text-gray-600">비밀번호 확인</label>
            <input
              className="mt-1 p-2 w-full border rounded-md"
              id="passwordCheck"
              type="password"
              placeholder="******"
              {...register("passwordConfirm", {
                required: "비밀번호는 필수 입력사항입니다.",
                minLength: {
                  value: 7,
                  message: "7자리 이상 비밀번호를 입력하세요."
                },
                validate: {
                  check: (value) => {
                    if (getValues("password") !== value) {
                      return "비밀번호가 일치하지 않습니다."
                    }
                  }
                }
              })}
            />
            {errors.passwordConfirm && <small className="text-xs text-red-500" role="alert">{errors.passwordConfirm.message}</small>}
          </div>
          <button className="w-full mt-1 bg-pink-300 p-1 rounded" type="submit">회원가입</button>
        </form>
      </div>
    </div>
  );
};
export default JoinPage;
