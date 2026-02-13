'use client'

import { useDebounce } from '@uidotdev/usehooks'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

function SearchBar() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [search, setSearch] = useState<string>(
    (searchParams.get('search') as string) || '',
  )

  const debounceSearch = useDebounce(search, 300)

  useEffect(() => {
    router.push(`${pathname}?search=${debounceSearch}`)
  }, [pathname, router, debounceSearch])

  return (
    <div className='min-w-40 max-w-96'>
      <input
        type='text'
        placeholder='Cari sekolah'
        className='border-slate-300 border px-2 py-1 w-full placeholder:text-sm text-slate-800 rounded-lg'
        value={search}
        onChange={(e) => {
          setSearch(e.target.value)
        }}
      />
    </div>
  )
}

export default SearchBar
