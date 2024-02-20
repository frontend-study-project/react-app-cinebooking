import { useForm } from "react-hook-form";
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    console.log(data)
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
              {...register("email", {
                required: "이메일은 필수 입력사항입니다.",
                pattern: {
                  value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                  message: "이메일 형식에 맞지 않습니다"
                }
              })}
            />
            {errors.email && <small role="alert">{errors.email.message}</small>}
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
            {errors.password && <small role="alert">{errors.password.message}</small>}
          </div>
          <button className="w-full mt-1 bg-pink-300 p-1 rounded" type="submit">로그인</button>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
