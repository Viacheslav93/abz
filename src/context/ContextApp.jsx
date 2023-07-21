import { createContext, useRef, useState } from "react";

const contextApp = createContext({})


export const ContextProvider = ({children}) => {

    const [currentPage, setCurrentPage] = useState(1)

    const userRef = useRef(null)
    const signUpRef = useRef(null)

    const value={
      currentPage, setCurrentPage,
      userRef, signUpRef
    }

    return (
        <contextApp.Provider value={value}>
            {children}
        </contextApp.Provider>
    )
}

export default contextApp