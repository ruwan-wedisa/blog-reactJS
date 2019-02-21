import React,{Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import PokeBall from '../pokeball.png'

class Home extends Component{
    state={
        posts:[]
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res =>{
            this.setState({
                posts:res.data.slice(0,10) //to get 10 of posts from jsonplaceholder
            })
        })
    }
    render(){
        const {posts} = this.state;
        const postList = posts.length ?(
            posts.map(post =>{
                return(
                    <div className="post card" key={post.id}>
                        <img src={PokeBall} alt="A poke Ball"/>
                        <div className="card-content">
                            <Link to={'/'+post.id}>
                            <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        )
        
        :(
            <div className="center">No Posts Yet</div>
        )

        return(
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        )
    }
}

export default Home;