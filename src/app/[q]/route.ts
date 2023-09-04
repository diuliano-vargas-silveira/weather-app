/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFetch } from '@/api/use-fetch'
import { MObject } from '@/utils'

export async function GET(params: MObject): Promise<MObject> {
  const { get } = useFetch()

  const response = await get('forecast.json', params)

  return response
}
