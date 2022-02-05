export const createIdFromGuid = (guid: string): number => {
  return Number(guid.match(/\d/g)?.join(''))
}
