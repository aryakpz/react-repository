
type Randomtype={
    value:number
}

type Positive=Randomtype & {
    ispos:boolean
    isneg:never
    iszero:never
}

type negative=Randomtype &{
    isneg :boolean
    ispos?:never
    iszero?:never
}

type zero=Randomtype &{
    iszero:boolean
    ispos?:never
    isneg?:never
}

// type Randomprops={
//     value:number
//     ispos?:boolean
//     isneg ?:boolean
//     iszero?:boolean
// }

type Randomprops= Positive |negative |zero 

export const Random  =({
    value,
    ispos,
    isneg,
    iszero
}:Randomprops)=>{
    return(
        <div>
            {value}{ispos && 'positive'} {isneg && 'negative'} {iszero && 'zero'}
        </div>
    )

}