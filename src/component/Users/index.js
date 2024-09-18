import { useEffect, useState } from "react";
import AddModal from "./add";
import EditModal from "./edit";
import DeleteModal from "./delete";


const Users = () => {
    const [users, setUsers] = useState([]);
    const [showAdd, setShowAdd] = useState(false)
    const [showEdit, setShowEdit] = useState(false); 
    const [currentUser, setCurrentUser] = useState(null);
    const [showDelete, setShowDelete] = useState(false);
    const [userId, setUserId] = useState(null);
    
    const handleCloseAdd = () => setShowAdd(false);
    const handleCloseEdit = () => setShowEdit(false);
    const handleCloseDelete = () => setShowDelete(false);

    const handleShowEdit = (user) => {
        setCurrentUser(user);
        setShowEdit(true);
    };

    const handleShowDelete = (id) => {
        setUserId(id);
        setShowDelete(true);
    };

    const handleUpdateUsers = (updatedUser) => {
        setUsers((prevUsers) =>
            prevUsers.map((p) => (p.id === updatedUser.id ? updatedUser : p))
        );
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((json) => {
                setUsers(json);
            })
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-between m-2">
                            <h3>Users</h3>
                            <button className="btn btn-warning" onClick={(e) => setShowAdd(true)}>Add</button>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-secondary">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Username</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Website</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.username}</td>
                                            <td>{item.email}</td>
                                            <td>{item.website}</td>
                                            <td>
                                                <button className="btn btn-primary m-1" onClick={() => handleShowEdit(item)}>Edit</button>
                                                <button className="btn btn-danger m-1" onClick={() => handleShowDelete(item.id)}>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <AddModal show={showAdd} handleClose={handleCloseAdd} />
            <EditModal showEdit={showEdit} handleClose={handleCloseEdit} user={currentUser} onUpdateUsers={handleUpdateUsers} />
            <DeleteModal showDelete={showDelete} handleClose={handleCloseDelete} userId={userId} />
        </>
    );
};

export default Users;
