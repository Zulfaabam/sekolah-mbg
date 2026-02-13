const BASE_URL = 'https://api-sekolah-indonesia.vercel.app/'

export const getSekolah = async () => {
  let res, err, loading

  loading = true

  try {
    const resp = await fetch(`${BASE_URL}/sekolah`, {
      method: 'GET',
    })

    res = await resp.json()
    if (res.status === 'failed') {
      err = res.message
    }
    loading = false
  } catch (error) {
    err = error
    loading = false
  }

  return { res, err, loading }
}
