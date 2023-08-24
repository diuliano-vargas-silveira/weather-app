import { MObject } from '.'

export function objectToStringParams(params: MObject) {
  const objectKeys = Object.keys(params)

  return objectKeys.reduce(
    (previous, current) => previous.concat(`&${current}=${params[current]}`),
    ''
  )
}
