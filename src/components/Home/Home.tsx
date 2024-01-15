const Home = () => {

  return (
    <h1 className="text-2xl font-bold italic">
      홈컴포넌트
    </h1>
  )
}
export default Home;


// import { useQuery } from '@tanstack/react-query';
// import { movieFetcher } from "../../utils/http";

// const SeatSelectior = () => {
//   const { data } = useQuery({
//     queryKey: ['movie'],
//     queryFn: movieFetcher
//   });

//   console.log(data)

//   return (
//     <>
//       <h1 className="text-2xl font-bold italic">
//         자리선택 컴포넌트
//       </h1>
//       {data.results.map((item) => <li>{item}</li>)}
//     </>

//   )
// }
// export default SeatSelectior;