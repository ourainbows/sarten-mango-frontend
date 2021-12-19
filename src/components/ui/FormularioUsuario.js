import React, { useContext, useRef } from 'react';


const FormularioUsuario = ({usuario}) => {

    const { id,  name } = usuario;
   // console.log(usuario);
    return ( 
        <div className="w-full px-3 mb-4">
            <div className="p-5 shadow-md bg-white">
                <div className="lg:flex">
                    <div className="lg:w-5/12 xl:w-3/12">
                   

                            <div className="sm:flex sm:-mx-2 pl-2">
                                
                            </div>
                            </div>
                            <div className="lg:w-7/12 xl:w-9/12 pl-5">
                            <p className="font-bold text-2xl text-yellow-600 mb-4">{name} </p>
                            <p className="font-bold text-2xl text-yellow-600 mb-4">{id} </p>
                           
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default FormularioUsuario;