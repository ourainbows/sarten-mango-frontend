import React from 'react';
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { getUserById, createUser, updateUser } from '../../services/userService';

const CreatePersona = () => {


    const [id, setId] = useState("")
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState("")
    const [birthtDay, setBirthtDay] = useState('')
    const [cellPhone, setCellPhone] = useState('')
    const [identification, setIdentification] = useState('')
    const [monthBirthtDay, setMonthBirthtDay] = useState('')
    const [password, setPassword] = useState('')
    const [type, setType] = useState('')
    const [zone, setZone] = useState('')
    const navigate = useNavigate();
    const { idpersona } = useParams();
    useEffect(() => {

        if (idpersona === '0')
            return;
        getUserById(idpersona).then(persona => {
            const per = persona.data;
            setId(per.id)
            setName(per.name)
            setAddress(per.address)
            setEmail(per.email)
            setBirthtDay(per.birthtDay)
            setCellPhone(per.cellPhone)
            setIdentification(per.identification)
            setMonthBirthtDay(per.monthBirthtDay)
            setPassword(per.password)
            setType(per.type)
            setZone(per.zone)
            
            console.log("persona", per)
        })

    }, [idpersona])

    const handleSubmit = (event) => {
        event.preventDefault();
        if (idpersona === '0') {
            createUser({
                id: id,
                name: name,
                address: address,
                email: email,
                birthtDay: birthtDay,
                cellPhone: cellPhone,
                identification: identification,
                monthBirthtDay: monthBirthtDay,
                password: password,
                type: type,
                zone:zone
            }).then(persona => {
                navigate('/usuarios')
                console.log("persona", persona.data);
            }).catch(error => {
                console.log("error", error);
                console.log("intento", id, name);
            })
            return;
        }
        updateUser({
            id: id,
            name: name,
            address: address,
            email: email,
            birthtDay: birthtDay,
            cellPhone: cellPhone,
            identification: identification,
            monthBirthtDay: monthBirthtDay,
            password: password,
            type: type,
            zone: zone
        }).then(persona => {
            navigate('/usuarios')
            console.log("persona", persona.data);
        }).catch(error => {
            console.log("error", error);
        })

    }

    const handleId = (event) => {
        setId(event.target.value)
    }
    const handleNombre = (event) => {
        setName(event.target.value)
    }
    const handleAddress = (event) => {
        setAddress(event.target.value)
    }
    const handleCorreo = (event) => {
        setEmail(event.target.value)
    }
    const handleBirthday = (event) => {
        setBirthtDay(event.target.value)
    }
    const handleCellphone = (event) => {
        setCellPhone(event.target.value)
    }
    const handleIdentification = (event) => {
        setIdentification(event.target.value)
    }
    const handleMonthBirthday = (event) => {
        setMonthBirthtDay(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleType = (event) => {
        setType(event.target.value)
    }
    const handleZone = (event) => {
        setZone(event.target.value)
    }
    

    return (
        <>
            <h1>Usuario</h1>
            <div className="container">
                <div className="row">
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>id</label>
                                <input value={id} onChange={handleId} type="number" className="form-control" placeholder="ID" />
                                <label>Nombre</label>
                                <input value={name} onChange={handleNombre} type="text" className="form-control" placeholder="Nombre" />
                                <label>Identificacion</label>
                                <input value={identification} onChange={handleIdentification} type="text" className="form-control" placeholder="Identificacion" />
                                <label>Direccion</label>
                                <input value={address} onChange={handleAddress} type="text" className="form-control" placeholder="Direccion" />
                                <label>Email</label>
                                <input value={email} onChange={handleCorreo} type="email" className="form-control" placeholder="Correo Electroncio" />
                                <label>Fecha nacimiento</label>
                                <input value={birthtDay} onChange={handleBirthday} type="text" className="form-control" placeholder="Dia Cumpleaños" />
                                <label>Celular</label>
                                <input value={cellPhone} onChange={handleCellphone} type="number" className="form-control" placeholder="Celular" />
                                <label>Mes Cumpleaños</label>
                                <input value={monthBirthtDay} onChange={handleMonthBirthday} type="text" className="form-control" placeholder="Mes de Cumpleaños" />
                                <label>Zona</label>
                                <input value={zone} onChange={handleZone} type="text" className="form-control" placeholder="Zona" />
                                <label>TIPO</label>
                                <input value={type} onChange={handleType} type="text" className="form-control" placeholder="Tipo de Usuario" />
                                <label>Contraseña</label>
                                <input value={password} onChange={handlePassword} type="password" className="form-control" placeholder="Contraseña" />
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                            <Link replace to="/usuarios" className="btn btn-secondary">Volver</Link>
                        </form>
                    </div>
                </div>

            </div>

        </>
    )
}

export default CreatePersona
