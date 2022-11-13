type NewComponentPropsType = {
    students: Array<StudentsType>
}
type StudentsType = {
    name: string,
    id: number,
    age: number
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (<>
            <ul>
                {props.students.map((e) => {return(
                   <>
                       <li>{e.name}</li>
                    <span> age {e.age}</span>
                    <span> id {e.id}</span>
                   </>
                )})}
            </ul>
        </>
    )
}