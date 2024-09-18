import { useEffect, useState } from "react";
import { Modal, Button, Form } from 'react-bootstrap';

const EditModal = ({ showEdit, handleClose, user, onUpdateUsers }) => {
    const [editedUser, setEditedUser] = useState(user || { name: '', username: '', email: '' });

    useEffect(() => {
        if (user) {
            setEditedUser(user);
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedUser(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`https://jsonplaceholder.typicode.com/users/${editedUser.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(editedUser),
        })
        .then(res => res.json())
        .then(json => {  
            onUpdateUsers(json);
            handleClose();  
        })
    };

    if (!showEdit) return null;

    return (
        <Modal show={showEdit} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Edit User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control 
                                type="text" 
                                name="name" 
                                value={editedUser.name || ''} 
                                onChange={handleChange} 
                                placeholder="Enter name" />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group className="mb-3">
                                <Form.Label>Username</Form.Label>
                                <Form.Control 
                                type="text" 
                                name="username" 
                                value={editedUser.username || ''} 
                                onChange={handleChange} 
                                placeholder="Enter username"  />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control 
                                type="email" name="email" 
                                value={editedUser.email || ''} 
                                onChange={handleChange} 
                                placeholder="Enter email" />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                    <Button type="submit" variant="primary">Save Changes</Button>
                    <Button variant="secondary" onClick={handleClose} className="me-2">Cancel</Button>                        
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default EditModal;
