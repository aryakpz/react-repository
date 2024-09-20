
type headingprop ={
    children:string
}
export const Heading=(props:headingprop)=>{
    return <h2>placehoder
        {props.children}
    </h2>
}