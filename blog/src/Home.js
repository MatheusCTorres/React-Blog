import Bloglist from './Bloglist'
import useFetch from './useFetch'

export default function Home() {

    const {data:blogs, isloading, error} = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
        {error && <div>{error}</div>}
        {isloading && <div>Loading...</div>}
           {blogs && <Bloglist blogs={blogs} title="all blogs!"/>}
        </div>
    )
}