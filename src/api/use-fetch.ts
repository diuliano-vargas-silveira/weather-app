import { MObject, objectToStringParams } from '@/utils'

const DEFAULT_PARAMS = '&aqi=no&lang=pt'

export function useFetch() {
  async function get(requestUrl: string, params: MObject): Promise<MObject> {
    const normalizeParams = objectToStringParams(params).concat(DEFAULT_PARAMS)

    const url = `${process.env.DEFAULT_API_URL}${requestUrl}?key=${process.env.API_KEY}${normalizeParams}`

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!response.ok) {
      return { error: response.text }
    }

    const data: MObject = await response.json()

    return data
  }

  return { get }
}
