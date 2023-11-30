import { User } from "@/models"
import { createUser } from "@/redux/slices/user.slice"
import { useDispatch } from "react-redux"
import { fetchMorty, rickAndMortyUrl } from "../services"

const CreateHomeButton = () => {

  const getMorty = async () => {
    const result = await fetchMorty(rickAndMortyUrl)
    dispatchAction(result)
  }

  const dispatch = useDispatch()

  const dispatchAction = (result: User) => {
    dispatch(createUser(result))
  }

  return (
    <>
      <button
        onClick={getMorty}
      >
        CreateHomeButton
      </button>
    </>
  )
}

export default CreateHomeButton