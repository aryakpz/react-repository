
import React from 'react';
import axios from 'axios';

const style = {

  title: {
    textAlign: 'left',
    fontSize: '10px'
  }

}

class Postlist extends React.Component
 {
  constructor(props) 
  {
    super(props)
    this.state = {                                       
      posts: [],
      errormsg: ''
    } 
  }  
                                                            
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      // fetch('https://jsonplaceholder.typicode.com/posts')

      // .then(res =>res.json())
      .then(response => {
        // console.log(data)  
        this.setState({
          posts: response.data
        })
      }) 
      .catch(error => {
        console.log(error)
        this.setState({ errormsg: 'error in retrivel' })
      })
  }

  render() {
    const { posts, errormsg } = this.state
    return (
      <div>
        list of post

        <div className='title' style={style.title}>
 
          {
            posts.length ?
              posts.map(post => <div key={post.id}>{post.title}</div>) : null
          }
            
          {
            errormsg ? <div>{errormsg}</div> : null
          }  
              
        </div>
      </div>
    )
  }
}
 
export default Postlist;                          