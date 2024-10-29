import { useLoaderData } from "react-router-dom";
import User from "../user/User";
import './Users.css'

const Users = () => {
    const users = useLoaderData();

    console.log(users);
    return (
        <div>
            <h2>Our Users : {users.length}</h2>
            <p>Fantastic and vodro Users</p>
            <div className="users" >
                {
                    users.map(user => <User key={user.id} user= {user} /> )
                }
            </div>
        </div>
    );
};

export default Users;