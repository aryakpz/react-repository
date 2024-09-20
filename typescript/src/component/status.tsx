type statusprop ={
    status :'loading'|'success'|'error'
}

export const Status =(props:statusprop)=>{
    let message 
    if(props.status === 'loading')
        {
            message ='loading...'
        }
    else if(props.status === 'success')
        {
            message ='data fetched successfully !'
        }
    return(
        <div>
            {/* <h2>loading....</h2>
            <h2>Data fetched successfully!</h2>
            <h2>Error fetching data</h2> */}
            <h2>
                status - {message}
            </h2>
        </div>    
    )
}  