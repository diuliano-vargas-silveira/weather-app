import { iconNoSearchedCity } from '@/assets'
import Image from 'next/image'

export default function NoCitySearched() {
  return (
    <main className="flex flex-col justify-center items-center w-full h-[calc(100vh-68px)]">
      <Image
        alt="Um urso em 2 tempos de noite e de dia"
        className="w-48"
        src={iconNoSearchedCity}
      />
      <span className="mt-2">Nenhuma cidade pesquisada ainda!</span>
    </main>
  )
}
