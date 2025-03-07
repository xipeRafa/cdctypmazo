
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
                    <button onClick={() => detallesHandler('comprobante de domicilio reciente Domicilio donde manifieste las armas Domicilio a nombre de el o carta de residencia en municipio') }>
                        Detalles...
                    </button>
            </div>




             <div>
                    <input type="checkbox" id="cartaNoAntecedentes" name="cartaNoAntecedentes" onChange={handleChangeCheckbox}
                         checked={JSON.parse(localStorage.req).cartaNoAntecedentes ? true : false}
                    />
                    <label htmlFor="cartaNoAntecedentes">carta no antecedentes penales Federal</label>
                    <button onClick={() => detallesHandler('Detalles ?') }>Detalles...</button>
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
                    <button onClick={() => detallesHandler('carta de trabajo ') }>Detalles...</button>
            </div>

            






              <div>
                    <input type="checkbox" id="antidopin" name="antidopin" onChange={handleChangeCheckbox}
                         checked={JSON.parse(localStorage.req).antidopin ? true : false}
                    />
                    <label htmlFor="antidopin">Antidoping</label>
                    <button onClick={() => detallesHandler('antidopin') }>Detalles...</button>
            </div>


            <div>
                    <input type="checkbox" id="examenToxicologico" name="examenToxicologico" onChange={handleChangeCheckbox}
                         checked={JSON.parse(localStorage.req).examenToxicologico ? true : false}
                    />
                    <label htmlFor="examenToxicologico">Examen Toxicologico</label>
                    <button onClick={() => detallesHandler('Examen toxicologico') }>Detalles...</button>
            </div>


              <div>
                    <input type="checkbox" id="certificadoMedico" name="certificadoMedico" onChange={handleChangeCheckbox}
                         checked={JSON.parse(localStorage.req).certificadoMedico ? true : false}
                    />
                    <label htmlFor="certificadoMedico">certificado medico </label>
                    <button onClick={() => detallesHandler('certificado medico') }>Detalles...</button>
            </div>

            <div>
                    <input type="checkbox" id="ine" name="ine" onChange={handleChangeCheckbox}
                         checked={JSON.parse(localStorage.req).ine ? true : false}
                    />
                    <label htmlFor="ine">
                            INE
                    </label>
                    <button onClick={() => detallesHandler('INE') }>Detalles...</button>
            </div>


              <div>
                    <input type="checkbox" id="fotos" name="fotos" onChange={handleChangeCheckbox}
                         checked={JSON.parse(localStorage.req).fotos ? true : false}
                    />
                    <label htmlFor="fotos">fotografia a color  </label>
                    <button onClick={() => detallesHandler('fotografia a color fondo blanco a color sin lentes') }>Detalles...</button>
            </div>

            <div>
                    <input type="checkbox" id="registrosDeArmas" name="registrosDeArmas" onChange={handleChangeCheckbox}
                         checked={JSON.parse(localStorage.req).registrosDeArmas ? true : false}
                    />
                    <label htmlFor="registrosDeArmas">
                            copia de registros de armas legible
                    </label>
                    <button onClick={() => detallesHandler('copia de registros de armas legible') }>Detalles...</button>
            </div>

            <div>
                    <input type="checkbox" id="certPsicologico" name="certPsicologico" onChange={handleChangeCheckbox}
                        checked={JSON.parse(localStorage.req).certPsicologico ? true : false}
                    />
                    <label htmlFor="certPsicologico">Cita para Certificado psicologico </label>
                    <button onClick={() => detallesHandler('en oficina martes 11:30 con cita - calendario digital') }>Detalles...</button>
            </div>


        </fieldset>



        <modal className={isActiveModal ? "detalles outModal" : "detalles inModal "}>
                
                <button className='btnCerrarModal' onClick={() => setIsActiveModal(!isActiveModal)}>Cerrar ✘ </button>
                <div className='detallesContent'>{detallesState}</div>
        </modal>

        <modalImg className={isActiveModalImg ? "detalles outModalImg" : "detalles inModalImg "}>
                
                <button className='btnCerrarModal' onClick={() => setIsActiveModalImg(!isActiveModalImg)}>Cerrar ✘ </button>
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
