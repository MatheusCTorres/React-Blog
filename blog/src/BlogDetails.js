import {useParams, useHistory} from 'react-router-dom'
import useFetch from './useFetch'

export default function BlogDetails() {

    const {id} = useParams()
    const {data:blog, error, isloading} = useFetch('http://localhost:8000/blogs/'+id)
    const history = useHistory()

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/'+blog.id, {
            method: 'DELETE'
        })
        .then(()=>{
            history.push('/')
        })
    }

    return (
        <div>
            <div className="blog-details">
                {isloading && <div> Loading... </div>}
                {error && <div> Error </div>}
                {blog && (
                    <article>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        <div>{blog.body}</div>
                        <button onClick={handleClick}>delete</button>
                    </article>
                )}
            </div>
        </div>
    )
}
