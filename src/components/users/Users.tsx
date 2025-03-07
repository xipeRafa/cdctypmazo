
import { useEffect, useState } from 'react'
import { PostForm } from './PostForm';
import { useUsers } from '../../hooks'
// import logo from '../../assets/logo.png'

import './users.css';

import reqImg from "../../imgs/requisitos.webp";






export const Users = () => {


    const { dataUsersGet, users, deleteUser, postUser, switchUser, setInfoToForm,
            editMode, newDataEdit, defaultModeEdith, uploadUserImg, usersFinder, 
            paginationSelect, paginationNext } = useUsers()




    // useEffect(() => {
    //     dataUsersGet()
    // }, [])




    const [requisitosState, setRequisitosState]=useState({
        cartillaMilitar:false, 
        cartaNoAntecedentes:false, 
        certPsicologico:false, 
        cartaDeTrabajo:false,

        comprobanteDeDomicilio:false, 
        antidopin:false,
        examenToxicologico:false, 
        certificadoMedico:false, 
        ine:false,

        fotos:false, 
        registrosDeArmas:false, 
    })

    

    // localStorage.req = JSON.stringify(requisitosState) 



    // const {cartillaMilitar, horns, scales1, horns1} = requisitosState


    // const [arrStateReq, setArrStateReq]=useState([])


    const [formContanct, setFormContact]=useState(false)

    if(localStorage.req === undefined){
            localStorage.req = JSON.stringify(requisitosState)  
    }
     


    const handleChangeCheckbox =(e)=>{

            setRequisitosState({...requisitosState, [e.target.name]: e.target.checked })

            let nnewv = JSON.parse(localStorage.req)

            nnewv[e.target.name] = e.target.checked

            localStorage.req = JSON.stringify(nnewv) 
      
    }




    if(Object.values(JSON.parse(localStorage.req)).filter(el => el === false).length === 0){
            if(formContanct===false){
                    setFormContact(true)
                    window.scrollTo({ top: 0 })
            }
    }







    const [isActiveModal, setIsActiveModal] = useState(true);
    const [isActiveModalImg, setIsActiveModalImg] = useState(true);
    const [detallesState, setDetallesState] = useState('')




    const detallesHandler=(text)=>{
        setIsActiveModal(!isActiveModal)
        setDetallesState(text)
    }




    return (
        <div>

        {/*<h2>Sistema para Inscripciones</h2>*/}


        <br />

        <fieldset>

            <legend>Requisitos Documentación para Inscripciones</legend>

            <div>
                    <input type="checkbox" id="comprobanteDeDomicilio" name="comprobanteDeDomicilio" onChange={handleChangeCheckbox}
                        checked={JSON.parse(localStorage.req).comprobanteDeDomicilio ? true : false}
                    />
                    <label htmlFor="comprobanteDeDomicilio">
                            comprobante de domicilio reciente 
                    </label>
                    <button onClick={() => detallesHandler('comprobante de Domicilio Reciente, Domicilio donde Manifieste las Armas, Domicilio a Nombre de Socio ó En su defecto Carta de Residencia en Municipio') }>
                        Detalles...
                    </button>
            </div>




             <div>
                    <input type="checkbox" id="cartaNoAntecedentes" name="cartaNoAntecedentes" onChange={handleChangeCheckbox}
                         checked={JSON.parse(localStorage.req).cartaNoAntecedentes ? true : false}
                    />
                    <label htmlFor="cartaNoAntecedentes">carta no antecedentes penales Federal</label>
                    <button onClick={() => detallesHandler('Carta de No Antecedentes Penales Federales') }>Detalles...</button>
            </div>



            <div>
                    <input type="checkbox" id="cartillaMilitar" name="cartillaMilitar"  onChange={handleChangeCheckbox}
                        checked={JSON.parse(localStorage.req).cartillaMilitar ? true : false}
                    />
                    <label htmlFor="cartillaMilitar">cartilla militar liberada o excepción</label>
                    <button onClick={() =>{setIsActiveModalImg(!isActiveModalImg), window.scrollTo(0,0) }}>Detalles...</button>
            </div>



            <div>
                    <input type="checkbox" id="cartaDeTrabajo" name="cartaDeTrabajo" onChange={handleChangeCheckbox}
                        checked={JSON.parse(localStorage.req).cartaDeTrabajo ? true : false}
                    />
                    <label htmlFor="cartaDeTrabajo">
                            carta de trabajo 
                    </label>
                    <button onClick={() => detallesHandler('Carta de Trabajo. Especificaciones: Hoja Membreteada, Logo de la Empresa con Dirección y Telefono Dirigida al Secretario de la Defensa Personal ó a Quien corresponda. con Carácter, Nombre, Antigüedad de Trabajo puesto que Desempeña en la Empresa, Conducto observada, Monto Mensual en Numeros y Letras,  Firma con Nombre Completo y puesto que Desempeña o Carta de Modo Honesto de Vivir, en Municipio para Empresarios') }>
                            Detalles...
                    </button>
            </div>

            






              <div>
                    <input type="checkbox" id="antidopin" name="antidopin" onChange={handleChangeCheckbox}
                         checked={JSON.parse(localStorage.req).antidopin ? true : false}
                    />
                    <label htmlFor="antidopin">Antidoping</label>
                    <button onClick={() => detallesHandler('Labaratorio Particular ó por medio de oficina del club') }>Detalles...</button>
            </div>


            <div>
                    <input type="checkbox" id="examenToxicologico" name="examenToxicologico" onChange={handleChangeCheckbox}
                         checked={JSON.parse(localStorage.req).examenToxicologico ? true : false}
                    />
                    <label htmlFor="examenToxicologico">Examen Toxicologico</label>
                    <button onClick={() => detallesHandler('Examen Toxicologico emitido por un Doctor, Espicificaciones:') }>Detalles...</button>
            </div>


              <div>
                    <input type="checkbox" id="certificadoMedico" name="certificadoMedico" onChange={handleChangeCheckbox}
                         checked={JSON.parse(localStorage.req).certificadoMedico ? true : false}
                    />
                    <label htmlFor="certificadoMedico">certificado medico </label>
                    <button onClick={() => detallesHandler('certificado medico pdf') }>Detalles...</button>
            </div>

            <div>
                    <input type="checkbox" id="ine" name="ine" onChange={handleChangeCheckbox}
                         checked={JSON.parse(localStorage.req).ine ? true : false}
                    />
                    <label htmlFor="ine">
                            INE

                    </label>
                    <button onClick={() => detallesHandler('INE. Foto Por ambos lados escaneada') }>Detalles...</button>
            </div>


              <div>
                    <input type="checkbox" id="fotos" name="fotos" onChange={handleChangeCheckbox}
                         checked={JSON.parse(localStorage.req).fotos ? true : false}
                    />
                    <label htmlFor="fotos">fotografia a color  </label>
                    <button onClick={() => detallesHandler('Fotografia a Color, fondo blanco, sin lentes, sin gorra, sin sombrero, cara despejada, digital') }>Detalles...</button>
            </div>

            <div>
                    <input type="checkbox" id="registrosDeArmas" name="registrosDeArmas" onChange={handleChangeCheckbox}
                         checked={JSON.parse(localStorage.req).registrosDeArmas ? true : false}
                    />
                    <label htmlFor="registrosDeArmas">
                            copia de registros de armas 
                    </label>
                    <button onClick={() => detallesHandler('Copia de Registro de Armas legible, si es que tiene') }>Detalles...</button>
            </div>

            <div>
                    <input type="checkbox" id="certPsicologico" name="certPsicologico" onChange={handleChangeCheckbox}
                        checked={JSON.parse(localStorage.req).certPsicologico ? true : false}
                    />
                    <label htmlFor="certPsicologico">Cita para Certificado psicologico </label>
                    <button onClick={() => detallesHandler('en oficina martes 11:30 con cita - da click en el boton de agendar cita') }>Detalles...</button>
            </div>


        </fieldset>



        <modal className={isActiveModal ? "detalles outModal" : "detalles inModal "}>
                
                <button className='btnCerrarModal' onClick={() => setIsActiveModal(!isActiveModal)}>⇦ Regresar </button>
                <div className='detallesContent'>{detallesState}</div>
        </modal>

        <modalImg className={isActiveModalImg ? "detalles outModalImg" : "detalles inModalImg "}>
                
                <button className='btnCerrarModal' onClick={() => setIsActiveModalImg(!isActiveModalImg)}>⇦ Regresar </button>
                <img  src={reqImg}  /> 
        </modalImg>


        <div className={formContanct ? '' : 'd-none'}>
            <PostForm postUser={postUser} setFormContact={setFormContact}/> 
        </div> 

        <div className='Agendar'>
            <button className='button' onClick={()=>{setFormContact(true), window.scrollTo({ top: 0 })}}> Agendar Examen Psicologico </button>
        </div>



        </div>
    )
}
