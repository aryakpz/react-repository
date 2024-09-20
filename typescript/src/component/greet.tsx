
type Greetprop = {
    name: string
    message?:number 
    islogg:boolean
}

export const Greet = (props: Greetprop) => {
    return (
        <div>
            <h2>{props.islogg ? `welcome ${props.name} ${props.message}` : 'welcomr guest'}
               </h2>
            <p>hello this is type script -program</p>
        </div>
    )
}                 