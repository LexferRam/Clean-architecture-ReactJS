import { modifyUser } from "@/redux/slices/user.slice"
import { useDispatch } from "react-redux"

const ModifyHomeButton = () => {

    const dispatch = useDispatch()

    const dispatchAction = () => {
        dispatch(modifyUser({name: "Fran", id: '0'}))
    }

  return (
    <button
        onClick={dispatchAction}
    >
        Modify user Button
    </button>
  )
}

export default ModifyHomeButton