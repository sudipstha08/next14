import Link from 'next/link'
import { FC } from 'react'

export const Header: FC = () => {
  return (
    <div className='bg-black p-2 text-white text-3xl'>
      <Link href="/">
      Header
      
      </Link>
      </div>
  )
}