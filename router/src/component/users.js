import { Outlet, useActionData } from "react-router"
import { useSearchParams } from "react-router-dom"
export const User = () => {

    const [search, setsearch] = useSearchParams()
    const show = search.get('filter') === 'active'

    return (
        <>
            <div>
                <h2>user 1</h2>
                <h2>user 2</h2>
                <h2>user 3</h2>
            </div>
            <Outlet />
            <div>
                <button onClick={() => setsearch({ filter: 'active' })}>Active users</button>
                <button onClick={() => setsearch({})}>Reset filter</button>
            </div>

            {show ? <h2>showing active</h2> : <h2> show all</h2>}

        </>
    )
}       