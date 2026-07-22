import { useEffect, useState } from "react";
import axios from "axios"
const useFetch = (url, method = 'get') => {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')


    useEffect(() => {
        const controller = new AbortController()
        setLoading(true)
        axios.get(url, { signal: controller.signal })
            .then((res) => {
                setData(res)
            })
            .catch(e => {
                setError(e)
            })
            .finally(() => {
                setLoading(false)
            })
        return () => {
            controller.abort()
        }
    }, [])
    return { data, loading, error }
}
export default useFetch  