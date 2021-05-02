import { imageBBApi } from '../api'

export const uploadImage = async file => {
  const formData = new FormData()

  formData.append('image', file)

  const { data: data } = await imageBBApi.post(
    `upload?key=${process.env.IMAGEBB_API_KEY}`,
    formData,
    { headers: { 'Content-Type': 'multipart/form-data' } }
  )

  return ({
    url: data.url,
    deleteUrl: data.delete_url,
  })
}
