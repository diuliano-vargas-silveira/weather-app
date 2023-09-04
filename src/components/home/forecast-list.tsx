import { formatDateToHour } from '@/utils'
import Image from 'next/image'

/* eslint-disable @typescript-eslint/no-explicit-any */
interface ForecastListProps {
  hoursList: any[]
}

export default function ForecastList({ hoursList }: ForecastListProps) {
  const date = new Date().getHours()

  return (
    <ul className="w-full justify-center list-none pl-0 mt-28 flex gap-8 overflow-auto pb-2">
      {hoursList.map((hour, index) => {
        const hourFormatted = formatDateToHour(hour.time)
        const hours = Number(hourFormatted.split(':')[0])
        const image = `http:${hour.condition.icon}`

        if (hours >= date) {
          return (
            <li
              className="flex flex-col items-center gap-3 text-gray-500"
              key={index}
            >
              <span className="text-sm">
                {date === hours ? 'NOW' : hourFormatted}
              </span>
              <Image
                alt={hour.condition.text}
                height={40}
                src={image}
                width={40}
              />
              <span className="text-sm text-gray-700 dark:text-gray-300">
                {Math.round(hour.temp_c)} °C
              </span>
            </li>
          )
        }
      })}
    </ul>
  )
}
