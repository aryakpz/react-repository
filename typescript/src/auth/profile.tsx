
export type Profileprops ={
    name:string
}

export const Profile =({name} :Profileprops)=>{
    return (
        <div>
            private profile component : name is {name}
        </div>
    )
}