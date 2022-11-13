export type CarsProps = {
    cars: Array<CarsPropsType>
}
export type CarsPropsType = {
    manufacturer: string,
    model: string
}


export const Cars = (props: CarsProps) => {
    return (
        <table>
            <tr>
                <th>Man</th>
                <th>Model</th>
                <th>number</th>
            </tr>
            {props.cars.map((c,index) => {
                return (<>

                    <tr>
                        <td>{c.manufacturer}</td>
                        <td>{c.model}</td>
                        <td>{index+1}</td>
                    </tr>
                </>)
            })}
        </table>
    )
}