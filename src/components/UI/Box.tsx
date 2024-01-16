type Props = {
  children: React.ReactNode;
}
const Box = (props: Props) => {
  return (
    <div className="mx-auto max-w-screen-lg w-full p-6 border border-gray-300 rounded-lg cursor-default">
      {props.children}
    </div>
  )
}
export default Box;