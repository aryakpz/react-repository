
type Horizontal ='left'| 'center' | 'right'
type Vertical='top' | 'center' | 'bottom'
type Toastprop ={

        position : Exclude<`${Horizontal}  ${Vertical}`,'center center'> | 'center'| 'left' | 'right'
}
export const Toast =({position}:Toastprop)=>{
    return(
        <div>
            Toast notificaton position -{position}
        </div>
    )
}