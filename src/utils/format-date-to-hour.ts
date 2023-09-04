const GET_HOURS = 1
const SPLIT_DATE_AND_HOURS = ' '

export function formatDateToHour(date: string) {
  const hours = date.split(SPLIT_DATE_AND_HOURS)[GET_HOURS]

  const [hour, minutes] = hours.split(':')

  return `${Number(hour)}:${minutes}`
}
