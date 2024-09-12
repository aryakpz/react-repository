
import React from "react";
import axios from "axios";

class Postform extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            title: '',
            body: '',
            error: 'error occured'
        }
    }

    change = (evt) => {

        this.setState({ [evt.target.name]: evt.target.value })
    }

    submit = (evt) => {
        evt.preventDefault()
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state)
            .then(respose => {
                console.log(this.state)
            })
            .catch(error => {
                console.log(this.state.error)
            })

    }

    render() {
        const { userId, title, body } = this.state
        return (
            <div>
                <form onSubmit={this.submit}>
                    
                    <div>
                        <input type="text" name="userId" value={userId} onChange={this.change}></input>
                    </div>
                    <div>
                        <input type="text" name="title" value={title} onChange={this.change}></input>
                    </div>
                    <div>
                        <input type="text" name="body" value={body} onChange={this.change}></input>
                    </div>

                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

export default Postform;