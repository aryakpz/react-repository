
type personprops={
     name:{
        first:string
        last:string
     }[]
    } 

export const Person=(props:personprops)=>
    {
        return(
            <div>
                {/* { props.name.first} */}
                {/* {props.name.last} */}
                {props.name.map(name =>{
                    return(
                        <h2> {name.first} -  & - {name.last} </h2>
                    )
                })}
            </div>
        )
    }