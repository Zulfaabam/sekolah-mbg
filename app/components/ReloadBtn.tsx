'use client'

function ReloadBtn() {
  return (
    <button
      className='bg-blue-500 text-slate-50 px-2 py-1 rounded-lg'
      onClick={() => window.location.reload()}
    >
      Refresh
    </button>
  )
}

export default ReloadBtn
