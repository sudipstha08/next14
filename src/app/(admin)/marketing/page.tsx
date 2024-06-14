import Link from 'next/link'

export default function Marketing() {
    return (
    <div className='p-4'>
      <h2 className="text-2xl my-2">
        Welcome to marketing page
      </h2>
        <Link className="underline" href="/">Go to Homepage</Link>
    </div>
  )
}