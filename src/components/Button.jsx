
// eslint-disable-next-line react/prop-types
const Button = ({text}) => {
  return (
    <button className="bg-color2 transition hover:bg-color1 hover:text-color2 text-color1 text-xl xl:text-3xl px-10 py-2 font-bold tracking-wide rounded-full ">{text}</button>
  )
}

export default Button