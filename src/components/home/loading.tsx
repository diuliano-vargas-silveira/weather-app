import { iconClearNight } from '@/assets'
import Image from 'next/image'

export default function LoadingC() {
  return (
    <main className="h-[100vh] w-[100vw] flex justify-center align-middle bg-dark-primary-700">
      <Image
        alt="Moon, a rounded purple sphere"
        className="w-10"
        src={iconClearNight}
      />
    </main>
  )
}
