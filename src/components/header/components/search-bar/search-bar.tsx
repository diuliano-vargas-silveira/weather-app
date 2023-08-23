'use client'
import { FormEvent } from 'react'

export function Searchbar() {
  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <form className="max-w-[50%] w-full" onSubmit={handleSubmit}>
      <input
        className="h-9 w-full rounded-lg border-[2px] focus-visible:outline-none border-gray-300 p-2 focus-visible:ring-1 ring-gray-300 text-sm font-light text-gray-300 placeholder:text-gray-300 placeholder:font-thin"
        placeholder="Ex. São Paulo, Campinas..."
        type="text"
      />
    </form>
  )
}
