import {Link} from 'react-router-dom'

export default function Bloglist({blogs, title}) {

    return (
        <div>
            <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((val)=>
                <div className="blog-preview" key={val.id}>
                    <Link to={`/blogs/${val.id}`}>
                        <h2>{val.title}</h2>
                        <p>Written by: {val.author}</p>
                    </Link>
                </div>
             )}
            </div>
        </div>
    )
}
