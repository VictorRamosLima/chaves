import { createContact } from '../api/contacts'
import { fetchContacts } from '../api/contacts/fetchContacts copy'
import { uploadImage } from '../api/imageBB'
import { createPicture } from '../api/pictures'

const orchestrateContractCreation = setContacts => async ({name, telephone, picture}) => {
  const { url, deleteUrl } = await uploadImage(picture)
  const { data: id } = await createContact({name, telephone})

  await createPicture({contactId: id, url, deleteUrl})

  fetchContacts().then(({data}) => setContacts(data))
}

export {orchestrateContractCreation as createContact}
