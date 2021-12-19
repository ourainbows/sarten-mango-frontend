import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Datacontext } from '../DataContext';
import { Spinner } from "react-bootstrap";
import { getUtensilios,deleteUtensilio } from '../../services/cookwareService';

class Productos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tool: [],
            loading: true
        };
    }
    static contextType = Datacontext;
    //Montaje
    componentDidMount() {
        getUtensilios().then(tool => {
            this.setState(() => ({
                tool: tool.data,
                loading: false
            }));
            console.log("tool", tool.data);
        });
    }


    //edit tool
    handleEditar = (event, id) => {
        event.preventDefault();
        console.log("handleEditar", id);
    }

    //delete personas
    handleEliminar = (event, id) => {

        console.log("handleEliminar", id);
        deleteUtensilio(id).then(tool => {
            this.setState((state) => ({
                user: state.tool.filter(tool => tool.reference !== id)
            }));
            console.log("tool", tool.data);
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
                            <th>Referencia</th>
                            <th>Marca</th>
                            <th>Categoria</th>
                            <th>Materiales</th>
                            <th>Dimensiones</th>
                            <th>Descripcion</th>
                            <th>Disponibilidad</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
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
                                (this.state.tool.map(tool => (
                                    <tr key={tool.reference}>
                                        <td>{tool.reference}</td>
                                        <td>{tool.brand}</td>
                                        <td>{tool.category}</td>
                                        <td>{tool.materiales}</td>
                                        <td>{tool.dimensiones}</td>
                                        <td>{tool.description}</td>
                                        <td>{String(tool.availability)}</td>
                                        <td>{tool.price}</td>
                                        <td>{tool.quantity}</td>
                                        
                                        <td>
                                            <Link to={"/cookware/create/" + tool.reference} className="btn btn-primary m-1">Editar</Link>
                                            <button onClick={(event, id) => this.handleEliminar(event, tool.reference)} className="btn btn-danger">Eliminar</button>
                                        </td>
                                    </tr>
                                )))}
                    </tbody>
                </table>
                {/* <Link to="/persona/create/0" className="btn btn-secondary">Crear Persona</Link> */}

                <Link to="/cookware/create/0" className="  bg-blue-800 hover:bg-blue-700, inline-block mb-5 p-2 text-white uppercase font-bold">
                    Agregar Producto
                </Link>

            </>
        )
    }
}


export default Productos;