import { useState, useEffect } from 'react'

function useService (url) {
  const [service, setrService] = useState({
    data: null,
    loading: true,
    error: null
  })

  const getService = () => {

  }

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setrService({
          data,
          loading: false,
          error: null
        })
      })
    // fetch data
    // set data
    // set loading
    // set error
  }, [url])

  return {
    ...service
  }
}
