import {useState, useEffect} from 'react'

const UseFetchGET = url => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => async () =>{
        const fetchPathGet = async () =>{
            try {
                let res = await fetch (url);
                let data = await res.json()
                setData(data)
                setLoading(false)
            } catch(error){
                setLoading(false)
                setError(error)
            }
        }
            fetchPathGet()
        }, [url])

        return {data, loading, error}
}


export default UseFetchGET;