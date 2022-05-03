// import { useState, useContext, createContext } from "react";

// const  AuthContext = createContext(null);

// export const AuthProvider = ({ children }) => {
//     const [user, setUser ] = useState(null)
    
//     const login = (user) => {
//         setUser(user)
//     }
//     const logout = () => {
//         setUser(null)
//     }
//     return <AuthContext.Provider valu={{user, login, logout}}>{children} </AuthContext.Provider>
// }
// export const useAuth = () => {
//     return useContext(AuthContext)
// }
