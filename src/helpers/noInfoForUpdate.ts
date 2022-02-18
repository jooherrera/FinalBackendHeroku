export const noInfoForUpdate = (body: any, image: string | undefined) => {
  return Object.entries(body).length === 0 && !image
}
