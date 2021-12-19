import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Datacontext } from '../DataContext';
import { Spinner } from "react-bootstrap";
import { getUsers, deleteUser } from '../../services/userService';

class Usuarios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            loading: true
        };
    }
    static contextType = Datacontext;
    //Montaje
    componentDidMount() {
        console.log("HelloMessage.componentDidMount");
        getUsers().then(user => {
            this.setState(() => ({
                user: user.data,
                loading: false
            }));
            console.log("user", user.data);
        });
    }

    //Actualizacion
    componentDidUpdate() {
        console.log("HelloMessage.componentDidUpdate");
    }

    //Desmontaje
    componentWillUnmount() {
        console.log("HelloMessage.componentWillUnmount");
    }

    //edit personas
    handleEditar = (event, id) => {
        event.preventDefault();
        console.log("handleEditar", id);
    }

    //delete personas
    handleEliminar = (event, id) => {

        console.log("handleEliminar", id);
        deleteUser(id).then(user => {
            this.setState((state) => ({
                user: state.user.filter(user => user.id !== id)
            }));
            console.log("user", user.data);
        }).catch(error => {
            console.log("error", error);
        });

    }


    render() {
        return (
            <>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Correo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.loading ?
                                (
                                    <tr>
                                        <td colSpan="6" className="text-center">
                                            <Spinner animation="grow" />
                                        </td>
                                    </tr>
                                ) :
                                (this.state.user.map(user => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.type}</td>
                                        <td>{user.email}</td>
                                        <td>
                                            <Link to={"/persona/create/" + user.id} className="btn btn-primary m-1">Editar</Link>
                                            <button onClick={(event, id) => this.handleEliminar(event, user.id)} className="btn btn-danger">Eliminar</button>
                                        </td>
                                    </tr>
                                )))}
                    </tbody>
                </table>
                {/* <Link to="/persona/create/0" className="btn btn-secondary">Crear Persona</Link> */}
                
                <Link to="/persona/create/0" className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                    Agregar Usuario
                </Link>
                
            </>
        )
    }
}

 
export default Usuarios;
