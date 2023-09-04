/* eslint-disable @typescript-eslint/no-explicit-any */
import Image from 'next/image'

const DEFAULT_SIZE = 90

export default function WeatherHeader({ weather }: any) {
  const image = `http:${weather.current.condition.icon}`

  return (
    <div className="w-full pt-9 flex flex-col items-center text-gray-700 dark:text-gray-300">
      <span className="text-2xl">{weather.location.name}</span>
      <Image
        alt={weather.current.condition.text}
        height={DEFAULT_SIZE}
        src={image}
        width={DEFAULT_SIZE}
      />
      <h2>{weather.current.temp_c} °C</h2>
      <span className="text-sm font-normal text-gray-500">
        {weather.current.condition.text}
      </span>
    </div>
  )
}
