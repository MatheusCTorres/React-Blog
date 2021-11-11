import {useState} from 'react'
import {useHistory} from 'react-router-dom'

export default function Create() {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [author, setAuthor] = useState("JK")
    const [isloading, setIsLoading] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) =>{
        e.preventDefault()
        const blog = {title, body, author}

        setIsLoading(true)
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"content-type": "application/json"},
            body: JSON.stringify(blog)
        })
        .then(()=>{
            console.log("new blog added")
            setIsLoading(false)
            // will go back to where I was 
            //history.go(-1)

            // will go back to main page
            history.push('/')
        })
    }

    return (
        <div>
            <div className="create">
                <h2>Add a new blog</h2>

               <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                    <input type="text" require value={title} onChange={(e) => setTitle(e.target.value)}/>

                    <label>Blog body:</label>
                    <textarea required value={body} onChange={(e) => setBody(e.target.value)}/>

                    <label>Blog author:</label>
                    <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                        <option value="Mark">Mark</option>
                        <option value="Marian">Marian</option>
                        <option value="Robertson">Robertson</option>
                    </select>

                    {!isloading && <button>Add blog</button>}
                    {isloading && <button disabled>Adding blog...</button>}
               </form>
            </div>
        </div>
    )
}
