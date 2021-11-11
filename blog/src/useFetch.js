import {useState, useEffect} from 'react'

const useFetch = (url) =>{

    const [data, setData] = useState(null)
    const [isloading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{

        fetch(url)
        .then(res =>{
            return res.json()
        })
        .then(data => {
            setData(data)
            setIsLoading(false)
            setError(null)
        })
        .catch(err =>{
            setIsLoading(false)
            setError(err.message)
        })
    }, [url])

    return {data, isloading, error}
}

export default useFetch