import React, { useState } from "react";
/*
 * Creates a UserAdminContext provider component that wraps its child components.
 * @param {Object} props - The props object.
 * @param {ReactNode} props.children - The child components to render.
 * @return {JSX.Element} - The UserAdminContext.Provider component.
 */
const UserAdminContext = React.createContext();

function UserAdminProvider({ children }){

    const [userAdmin, setUserAdmin] = useState(null);
    
    return(
        <UserAdminContext.Provider value={{ userAdmin, setUserAdmin }} >
            {children}
        </UserAdminContext.Provider>
    );
}

export { UserAdminContext, UserAdminProvider };