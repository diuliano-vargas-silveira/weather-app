/* eslint-disable @typescript-eslint/no-explicit-any */
import NoCitySearched from '@/components/home/no-city-searched'
import ErrorMessage from '@/components/home/error-message'
import WeatherHeader from '@/components/home/weather-header'
import ForecastList from '@/components/home/forecast-list'

import { GET } from './[q]/route'

export default async function Page({ searchParams }: any) {
  if (searchParams.q === undefined) {
    return <NoCitySearched />
  }

  const weather: any = await GET(searchParams)

  if (weather.error) {
    return <ErrorMessage error={weather.error} />
  }

  const hoursList = weather.forecast.forecastday[0].hour

  return (
    <main className="w-full px-[6%] overflow-hidden">
      <WeatherHeader weather={weather} />
      <ForecastList hoursList={hoursList} />
    </main>
  )
}
