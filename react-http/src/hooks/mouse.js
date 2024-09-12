import React, { useState } from "react";
import Use from "./useeffect";

function Mouse() {
    const [display, setdiplay] = useState(false)
    return (
        <div>
            <button onClick={() => setdiplay(!display)}>toggle</button>
            {display && <Use />}
        </div>
    )
}

export default Mouse