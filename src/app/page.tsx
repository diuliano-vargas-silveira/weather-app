/* eslint-disable @typescript-eslint/no-explicit-any */
import { GET } from './[q]/route'

export default async function Page({ searchParams }: any) {
  if (searchParams.q === undefined) {
    return <>pesquise agora</>
  }
  const weather: any = await GET(searchParams)

  return (
    <main>
      <div>{JSON.stringify(weather)}</div>
    </main>
  )
}
