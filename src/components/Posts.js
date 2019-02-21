import React,{Component} from 'react';
import axios from 'axios'

class Posts extends Component{
    state={
        post:null
    }
    componentDidMount(){
        console.log(this.props);
        let id = this.props.match.params.postid;
        axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
        .then(res=>{
            this.setState({
                post:res.data
            })
        })

        this.setState({
            id:id
        })
    }
    render(){

        const post = this.state.post ? (


            <div className="post">

            <h4 className="center">{this.state.post.title}</h4>
    
            <p>{this.state.post.body}</p>
            </div>

        ):(
            <div className="container">Loading Posts...</div>
        )
        
        return(
            <div className="container">
                {post}
            </div>
        )
    }
}

export default Posts;