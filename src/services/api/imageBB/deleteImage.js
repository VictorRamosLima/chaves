import axios from 'axios'

export const deleteImage = url => axios({method: 'delete', url})
