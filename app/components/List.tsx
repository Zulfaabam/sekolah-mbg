'use client'

import { useMemo } from 'react'
import { Sekolah } from '../types/sekolah'
import { useSearchParams } from 'next/navigation'

const statusColor = {
  Sangar: 'text-green-500',
  'Non Sangar': 'text-red-500',
}

const List = ({ sekolah }: { sekolah: Sekolah[] }) => {
  const searchParams = useSearchParams()

  const filteredSekolah = useMemo(() => {
    return sekolah.filter((s) =>
      s.sekolah
        .toLowerCase()
        .includes(searchParams.get('search')?.toLowerCase() || ''),
    )
  }, [sekolah, searchParams])

  return (
    <div className='space-y-2 w-full h-full'>
      <div className='mt-4 grid-cols-1 md:grid-cols-2 grid gap-2'>
        {filteredSekolah?.map((s) => {
          const alamatFull = `${s.alamat_jalan}, ${s.kecamatan}, ${s.kabupaten_kota}, ${s.propinsi}`
          const status = s.status === 'S' ? 'Sangar' : 'Non Sangar'

          return (
            <div
              key={s.id}
              className='border border-slate-300 rounded-lg p-2 *:text-sm space-y-0.5 col-span-1'
            >
              <p className={` ${statusColor[status]}`}>Status: {status}</p>
              <p>Nama: {s.sekolah}</p>
              <p>NPSN: {s.npsn}</p>
              <p className='text-slate-600'>Alamat: {alamatFull}</p>
              <div className='text-xs text-slate-500 mt-2 flex items-center gap-2'>
                <span>
                  📍 {s.lintang}, {s.bujur}
                </span>
                <a
                  href={`https://www.google.com/maps?q=${s.lintang},${s.bujur}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-blue-500 hover:underline'
                >
                  Lihat di Peta
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
