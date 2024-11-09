export function convertDate(data: string) {
  const dataArray = data.split('/')
  return new Date(dataArray[1], dataArray[0], dataArray[2])
}