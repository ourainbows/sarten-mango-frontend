import React from 'react';
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getUtensilioById, createUtensilio, updateUtensilio } from '../../services/cookwareService';


const CreateProducto = () => {
   const [reference, setReference] = useState("")
   const [brand, setBrand] = useState('')
   const [category, setCategory] = useState("")
   const [materiales, setMateriales] = useState('')
   const [dimensiones, setDimensiones] = useState('')
   const [description, setDescription] = useState('')
   const [availability, setAvailability] = useState('')
   const [price, setPrice] = useState('')
   const [quantity, setQuantity] = useState('')
   const [photography, setPhotography] = useState('')
   const navigate = useNavigate();
   const { idcookware } = useParams();
   console.log(idcookware)
   useEffect(() => {

      if (idcookware === '0')
         return;
      getUtensilioById(idcookware).then(herramienta => {
         const tool = herramienta.data;
         setReference(tool.reference)
         setBrand(tool.brand)
         setCategory(tool.category)
         setMateriales(tool.materiales)
         setDimensiones(tool.dimensiones)
         setDescription(tool.description)
         setAvailability(tool.availability)
         setPrice(tool.price)
         setQuantity(tool.quantity)
         setPhotography(tool.photography)
      })

   }, [idcookware])

   const handleSubmit = (event) => {
      event.preventDefault();
      if (idcookware === '0') {
         createUtensilio({
            reference: reference,
            brand: brand,
            category: category,
            materiales: materiales,
            dimensiones: dimensiones,
            description: description,
            availability: availability,
            price: price,
            quantity: quantity,
            photography: photography
         }).then(herramienta => {
            navigate('/productos')
            console.log("productos", herramienta.data);
         }).catch(error => {
            console.log("error", error);
            console.log("intento", reference, brand);
         })
         return;
      }
      updateUtensilio({
         reference: reference,
         brand: brand,
         category: category,
         materiales: materiales,
         dimensiones: dimensiones,
         description: description,
         availability: availability,
         price: price,
         quantity: quantity,
         photography: photography
      }).then(herramienta => {
         navigate('/productos')
         console.log("productos", herramienta.data);
      }).catch(error => {
         console.log("error", error);
      })

   }

   const handleReference = (event) => {
      setReference(event.target.value)
   }
   const handleBrand = (event) => {
      setBrand(event.target.value)
   }
   const handleCategory = (event) => {
      setCategory(event.target.value)
   }
   const handleMateriales = (event) => {
      setMateriales(event.target.value)
   }
   const handleDimensiones = (event) => {
      setDimensiones(event.target.value)
   }
   const handleDescription = (event) => {
      setDescription(event.target.value)
   }
   const handleAvailability = (event) => {
      setAvailability(event.target.value)
   }
   const handlePrice = (event) => {
      setPrice(event.target.value)
   }
   const handleQuantity = (event) => {
      setQuantity(event.target.value)
   }
   const handlePhotography = (event) => {
      setPhotography(event.target.value)
   }


   return (
      <>
         <h1>Productos</h1>
         <div className="container">
            <div className="row">
               <div>
                  <form onSubmit={handleSubmit}>
                     <div className="form-group">
                        <label>Reference</label>
                        <input value={reference} onChange={handleReference} type="text" className="form-control" placeholder="Referencia" />
                        <label>Marca</label>
                        <input value={brand} onChange={handleBrand} type="text" className="form-control" placeholder="Marca" />
                        <label>Descripcion</label>
                        <input value={description} onChange={handleDescription} type="text" className="form-control" placeholder="Descripcion" />
                        <label>Categoria</label>
                        <input value={category} onChange={handleCategory} type="text" className="form-control" placeholder="Categoria" />
                        <label>Materiales</label>
                        <input value={materiales} onChange={handleMateriales} type="text" className="form-control" placeholder="Materiales" />
                        <label>Dimensiones</label>
                        <input value={dimensiones} onChange={handleDimensiones} type="text" className="form-control" placeholder="Dimensiones" />
                        <label>Disponibilidad</label>
                        <input value={availability} onChange={handleAvailability} type="text" className="form-control" placeholder="Disponibilidad" />
                        <label>URL Fotografia</label>
                        <input value={photography} onChange={handlePhotography} type="text" className="form-control" placeholder="URL Fotografia" />
                        <label>Cantidad</label>
                        <input value={quantity} onChange={handleQuantity} type="text" className="form-control" placeholder="Cantidad" />
                        <label>Precio</label>
                        <input value={price} onChange={handlePrice} type="password" className="form-control" placeholder="Precio" />
                     </div>
                     <button type="submit" className="btn btn-primary">Submit</button>
                     <Link replace to="/productos" className="btn btn-secondary">Volver</Link>
                  </form>
               </div>
            </div>

         </div>

      </>
   )
}
 
export default CreateProducto;