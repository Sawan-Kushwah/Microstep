import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const Private = () => {
    const { user } = useAuth0();
    const [id, setid] = useState(""); // Admin ID
    const getAdmin = async () => {
        let res = await fetch("http://localhost:3000/getAdminPassword");
        let r = await res.json();
        if (r.adminID) {
            setid(r.adminID);
        } else {
            setid("false")
        }
    }
    if (id === "") {
        getAdmin();
    }
    if (user.email === id) {
        return (
            <Outlet />
        )
    } else {
        return (
            <div>Not found</div>
        )
    }

}

export default Private