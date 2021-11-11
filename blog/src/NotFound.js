import {Link} from 'react-router-dom'

export default function NotFound() {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page does not exist</p>
            <Link to="/">Back to the homepage</Link>
        </div>
    )
}
