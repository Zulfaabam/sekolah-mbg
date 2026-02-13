import { Suspense } from 'react'
import List from './components/List'
import SearchBar from './components/SearchBar'
import { getSekolah } from './services/sekolah'
import ListLoading from './components/ListLoading'
import ReloadBtn from './components/ReloadBtn'

export default async function Home() {
  const { res, err } = await getSekolah()

  if (err) {
    return (
      <div className='min-h-screen w-full bg-zinc-50 font-sans'>
        <div className='mx-auto max-w-5xl p-4 lg:px-0 flex items-center justify-center h-full flex-col gap-2'>
          <p className='text-red-500'>{err.toString()}</p>
          <ReloadBtn />
        </div>
      </div>
    )
  }

  const date = new Date().toLocaleDateString()

  return (
    <div className='min-h-screen w-full bg-zinc-50 font-sans text-slate-800 '>
      <div className='mx-auto max-w-4xl p-4 lg:px-0 space-y-4'>
        <div className='flex flex-col md:flex-row gap-2 md:items-center justify-between'>
          <div>
            <h1 className='text-xl md:text-3xl font-semibold'>
              Daftar Sekolah MBG Indonesia
            </h1>
            <p className='text-xs md:text-sm text-slate-700'>
              Per Tanggal: {date}
            </p>
          </div>
          <SearchBar />
        </div>
        <Suspense fallback={<ListLoading />}>
          <List sekolah={res.dataSekolah} />
        </Suspense>
      </div>
    </div>
  )
}
