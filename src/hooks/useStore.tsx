import { useContext } from "react"
import { rootContext } from "../stores"
export const useStore = () => 
    useContext(rootContext)