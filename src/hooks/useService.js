import { useState, useEffect } from 'react'
import axios from 'axios'

export function useService (url, tipoPeticion) {
  const [service, setrService] = useState({
    data: null,
    loading: true,
    error: null
  })

  const getService = (url, tipoPeticion) => {
    if (tipoPeticion === 'axios') {
      axios.get(url)
        .then(response => {
          setrService({
            data: response.data,
            loading: false,
            error: null
          })
        })
        .catch(error => {
          setrService({
            data: null,
            loading: false,
            error
          })
        })
    } else {
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setrService({
            data,
            loading: false,
            error: null
          })
        })
        .catch(error => {
          setrService({
            data: null,
            loading: false,
            error
          })
        })
    }
  }

  useEffect(() => {
    getService(url, tipoPeticion)
  }, [url, tipoPeticion])

  return {
    ...service
  }
}
