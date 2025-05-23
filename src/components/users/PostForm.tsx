import {useEffect, useState} from 'react'
import './postForm.css';
import { useForm } from '../../helpers';

//lugar,calle,colonia,dia,hora,informes,fechaDeInicio






export const PostForm = ({ postUser, editMode, newDataEdit, defaultModeEdith, setFormContact,location }) => {

    const[name2, setName2]=useState({
        nombre:'',correo:'',telefono:''
    })


console.log(location?.pathname)

    const { nombre,correo,telefono, onInputChange: onPostInputChange, onResetForm } = useForm(name2);

  
// console.log('dia:', fechaDeInicio.slice(-2), 'mes:', fechaDeInicio.slice(5,7), 'Año:', fechaDeInicio.slice(0,4))






// function obtenerMes(n) {

//   const meses = {
//     '01': "Enero",
//     '02': "Febrero",
//     '03': "Marzo",
//     '04': "Abril",
//     '05': "Mayo",
//     '06': "Junio",
//     '07': "Julio",
//     '08': "Agosto",
//     '09': "Septiembre",
//     '10': "Octubre",
//     '11': "Noviembre",
//     '12': "Diciembre",
//     'default':'Falto Fecha'

//   };

//   return meses[n] || meses['default']
// }

//     let mesTexto = obtenerMes(fechaDeInicio.slice(5,7))



//     let FI = Math.trunc(fechaDeInicio.slice(-2)) + ' de ' + mesTexto + ' del ' + fechaDeInicio.slice(0,4)

//      useEffect(() => { 
//         if(editMode !== undefined) {
//             const { lugar,calle,colonia,dia,hora,informes,fechaDeInicio,para } = editMode
//             setName2({lugar,calle,colonia,dia,hora,informes,fechaDeInicio:FI,para})
//         }
//     }, [editMode]) 



    const onSubmitUsers = (event: any) => {
        event.preventDefault();

        if(editMode){
            // newDataEdit(lugar,calle,colonia,dia,hora,informes,FI,para, editMode.uid)
            // setName2({lugar:'',calle:'',colonia:'',fechaDeInicio:''})
        }else{

            if(location?.pathname==='/cdctypmazo/categorias'){
                postUser({nombre,correo,telefono,ren:true})    
            }else{
                postUser({nombre,correo,telefono})    
            }
            
            setFormContact('')
        }

        onResetForm()
        // window.location.reload()
        localStorage.req=JSON.stringify({
        cartillaMilitar:false, 
        cartaNoAntecedentes:false, 
        certPsicologico:false, 
        cartaDeTrabajo:false,

        comprobanteDeDomicilio:false, 
        antidopin:false, 
        certificadoMedico:false, 
        ine:false,

        fotos:false, 
        registrosDeArmas:false})


        localStorage.reqRen=JSON.stringify({ 
        cartaNoAntecedentes:false, 
        certPsicologico:false, 
        cartaDeTrabajo:false,

        comprobanteDeDomicilio:false, 
        antidopin:false, 
        certificadoMedico:false, 
        })


        setTimeout(()=>{
                window.location.reload()
        },9000)
    }


    
    // const handleCancelEdit =()=>{
    //     defaultModeEdith()
    //     setName2({lugar:'',calle:'',colonia:'',dia:'',hora:'',informes:'',fechaDeInicio:'',para:''})
    // }

  



  return (

    <div className="row1">
        <div className="col login-form-1 ">
            <h3>{location?.pathname==='/cdctypmazo/categorias' ? 'RENOVACIÓN' : 'CONTACTO' }</h3>

            <p> Envíanos tu Información de Contacto para Revisar los Documentos y/o poner Fecha 
            para el Examen Psicológico. Recibirás un Correo en las Próximas 48 Horas</p>

            <form onSubmit={onSubmitUsers}>


                <div className="form-group mb-4">
                    <input
                        className="form-control"
                        placeholder="Nombre"
                        name="nombre"
                        value={nombre}
                        onChange={onPostInputChange}
                        required
                    />
                </div>

                <div className="form-group mb-4">
                    <input
                        type='email'
                        className="form-control"
                        placeholder="@ Correo"
                        name="correo"
                        value={correo}
                        onChange={onPostInputChange}
                        required
                    />
                </div>
                

                <div className="form-group mb-5">
                    <input
                        type='number'
                        className="form-control"
                        placeholder="Telefono"
                        name="telefono"
                        value={telefono}
                        onChange={onPostInputChange}
                        required
                    />
                </div>






                <div className="d-grid gap-2">
                    <input type="submit" className="btnSubmitPost btn" value='ENVIAR'/>
                    <button onClick={()=>{setFormContact('')
                         localStorage.req=JSON.stringify({
        cartillaMilitar:false, 
        cartaNoAntecedentes:false, 
        certPsicologico:false, 
        cartaDeTrabajo:false,

        comprobanteDeDomicilio:false, 
        antidopin:false, 
        certificadoMedico:false, 
        ine:false,

        fotos:false, 
        registrosDeArmas:false})

                         localStorage.reqRen=JSON.stringify({ 
        cartaNoAntecedentes:false, 
        certPsicologico:false, 
        cartaDeTrabajo:false,

        comprobanteDeDomicilio:false, 
        antidopin:false, 
        certificadoMedico:false, 
        })


                          setTimeout(()=>{
                window.location.reload()
        },1000)

                     }
                    } className="mt-5 btn btn-outline-dark btn-sm">cancelar</button>
                    
                </div>


            </form>
        </div>
    </div>

  )
}
