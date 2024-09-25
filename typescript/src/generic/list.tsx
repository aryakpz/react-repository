
type Listprops<T> ={
    // items :string[] |number [] | object []
    items :T[]
    onClick :(value:T)=>void
    // onClick :(value:string | number | object)=>void
}

export const List =<T extends {id:number}>({items,onClick}:Listprops<T>)=>{
    return (
        <div>
            <h2>list of items</h2>
            {items.map((item,index)=>{
                return(
                    <div key={item.id} onClick={()=>onClick(item)}>
                       {/* {item} */}
                    </div>
                )
            })}
        </div>
    )
}   