

type PropsForHeaderType={
  title:string
}
export const Header = (props: PropsForHeaderType) => {
  return(
      <div>{props.title}</div>
  )
}