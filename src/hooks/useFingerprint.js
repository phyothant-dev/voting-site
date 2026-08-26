import { useState, useEffect } from 'react'
import FingerprintJS from '@fingerprintjs/fingerprintjs-pro'

let fpPromise = null

function getFP() {
  if (!fpPromise) {
    fpPromise = FingerprintJS.load({
      apiKey: import.meta.env.VITE_FP_API_KEY,
    })
  }
  return fpPromise
}

export function useFingerprint() {
  const [fingerprint, setFingerprint] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const fp = await getFP()
        const result = await fp.get()
        setFingerprint(result.visitorId)
      } catch (err) {
        console.error('Fingerprint error:', err)
        let id = localStorage.getItem('ucs_fallback_id')
        if (!id) {
          id = crypto.randomUUID()
          localStorage.setItem('ucs_fallback_id', id)
        }
        setFingerprint(id)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return { fingerprint, loading }
}
