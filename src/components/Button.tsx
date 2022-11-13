
export type ButtonProps={
 name:string
}
export const Button = (props: ButtonProps) => {
 return(
     <button> {props.name}</button>
 )
}