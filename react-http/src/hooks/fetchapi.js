
import React, { useEffect, useState } from "react";
import axios from "axios";

function Datafetch() {
    const [post, setpost] = useState([])

    const[id,setid]=useState(0)

    const[bid,setbid]=useState(0)
     
    const handle=()=>{
        setbid(id)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                console.log(response)
                setpost(response.data)
            })
            .catch(err => {
                console.log(err)
            })

    },[bid])

    return (
        <div>

            <input type="text" value={id} onChange={e =>setid(e.target.value)}></input>
            <h1>{post.title}</h1>
            <button onClick={handle}> click</button>

            {/* {

                post.map(item =>
                (
                    <div key={item.id}>{item.title}</div>
                )
                )
            } */}

        </div>
    )
}

export default Datafetch;
