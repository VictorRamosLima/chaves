import { deleteContact, fetchContacts } from '../api/contacts'
import { deleteImage } from '../api/imageBB'
import { fetchPicture } from '../api/pictures'

export const orchestrateContractDeletion = setContacts => async id => {
  const { deleteUrl } = await fetchPicture(id)

  Promise.all([
    deleteImage(deleteUrl),
    deleteContact(id),
  ])

  fetchContacts().then(({data}) => setContacts(data))
}

export {orchestrateContractDeletion as deleteContact}
