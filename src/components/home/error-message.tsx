import Image from 'next/image'
import { iconNotFound } from '@/assets'

interface ErrorMesageProps {
  error: string
}

export default function ErrorMessage({ error }: ErrorMesageProps) {
  return (
    <main className="w-full h-[calc(100vh-68px)] px-[6%]  flex flex-col items-center justify-center">
      <Image
        alt="404 sua cidade não foi encontrada"
        className="w-72"
        src={iconNotFound}
      />
      <span className="text-center pl-4">{error}</span>
    </main>
  )
}
