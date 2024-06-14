"use client"

import { useRouter } from 'next/navigation'
import { FC } from 'react'

interface ITodo {
  id: string
  title: string
}

export const TodoCard: FC<ITodo> = ({ id, title }) => {
  const router = useRouter()
  const handleClick = () => {
      router.push(`/team/${id}`, { scroll: true })
  }
  return (
    <div key={id} className="bg-slate-800 p-2 cursor-pointer" onClick={handleClick}>
    <span className="pr-3">{id}</span>
    <span>{title}</span>
  </div>
  )
}