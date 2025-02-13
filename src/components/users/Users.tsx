
import { useEffect, useState } from 'react'
// import { PostForm } from './PostForm';
import { useUsers } from '../../hooks'
// import logo from '../../assets/logo.png'

import './users.css';

import reqImg from "../../imgs/requisitos.webp";


export const Users = () => {




    const { dataUsersGet, users, deleteUser, postUser, switchUser, setInfoToForm,
            editMode, newDataEdit, defaultModeEdith, uploadUserImg, usersFinder, 
            paginationSelect, paginationNext } = useUsers()




    useEffect(() => {
        dataUsersGet()
    }, [])




    const [requisitosState, setRequisitosState]=useState({
        cartillaMilitar:false, 
        cartaNoAntecedentes:false, 
        certPsicologico:false, 
        cartaDeTrabajo:false,

        comprobanteDeDomicilio:false, 
        antidopin:false, 
        certificadoMedico:false, 
        ine:false,

        fotos:false, 
        registrosDeArmas:false, 
    })

    const {cartillaMilitar, horns, scales1, horns1} = requisitosState

    // const [arrStateReq, setArrStateReq]=useState([])

    const handleChangeCheckbox =(e)=>{

            setRequisitosState({...requisitosState, [e.target.name]: e.target.checked })

            Object.values(requisitosState)

    }

    if(Object.values(requisitosState).filter(el => el === false).length === 0){
                alert('completo')
    }else{
               
    }



    const [isActiveModal, setIsActiveModal] = useState(true);
    const [isActiveModalImg, setIsActiveModalImg] = useState(true);
    const [detallesState, setDetallesState] = useState('')

     console.log(isActiveModal)


     const detallesHandler=(text)=>{
        setIsActiveModal(!isActiveModal)
        setDetallesState(text)
     }

    return (
        <div>

        {/*<h2>Sistema para Inscripciones</h2>*/}


        <br />
        <br />
        <br />

        <fieldset>

            <legend>Requisitos Documentacion para Inscripciones</legend>

            <div>
                    <input type="checkbox" id="comprobanteDeDomicilio" name="comprobanteDeDomicilio" onChange={handleChangeCheckbox}/>
                    <label htmlFor="comprobanteDeDomicilio">
                            comprobante de domicilio reciente 
                    </label>
                    <button onClick={() => detallesHandler('comprobante de domicilio reciente Domicilio donde manifieste las armas Domicilio a nombre de el o carta de residencia en municipio') }>
                        Detalles...
                    </button>
            </div>

             <div>
                    <input type="checkbox" id="cartaNoAntecedentes" name="cartaNoAntecedentes" onChange={handleChangeCheckbox}/>
                    <label htmlFor="cartaNoAntecedentes">carta no antecedentes penales Federal</label>
                    <button onClick={() => detallesHandler('Detalles ?') }>Detalles...</button>
            </div>

            <div>
                    <input type="checkbox" id="cartillaMilitar" name="cartillaMilitar" value={cartillaMilitar ? 'true' : 'false'} onChange={handleChangeCheckbox}/>
                    <label htmlFor="cartillaMilitar">cartilla militar liberada o excepción</label>
                    <button onClick={() => setIsActiveModalImg(!isActiveModalImg) }>Detalles...</button>
            </div>

            <div>
                    <input type="checkbox" id="cartaDeTrabajo" name="cartaDeTrabajo" onChange={handleChangeCheckbox}/>
                    <label htmlFor="cartaDeTrabajo">
                            carta de trabajo 
                    </label>
                    <button onClick={() => detallesHandler('carta de trabajo ') }>Detalles...</button>
            </div>

            






              <div>
                    <input type="checkbox" id="antidopin" name="antidopin" onChange={handleChangeCheckbox}/>
                    <label htmlFor="antidopin">antidopin toxicologico</label>
                    <button onClick={() => detallesHandler('antidopin toxicologico') }>Detalles...</button>
            </div>


              <div>
                    <input type="checkbox" id="certificadoMedico" name="certificadoMedico" onChange={handleChangeCheckbox}/>
                    <label htmlFor="certificadoMedico">certificado medico </label>
                    <button onClick={() => detallesHandler('certificado medico') }>Detalles...</button>
            </div>

            <div>
                    <input type="checkbox" id="ine" name="ine" onChange={handleChangeCheckbox}/>
                    <label htmlFor="ine">
                            INE
                    </label>
                    <button onClick={() => detallesHandler('INE') }>Detalles...</button>
            </div>


              <div>
                    <input type="checkbox" id="fotos" name="fotos" onChange={handleChangeCheckbox}/>
                    <label htmlFor="fotos">fotografia a color  </label>
                    <button onClick={() => detallesHandler('fotografia a color fondo blanco a color sin lentes') }>Detalles...</button>
            </div>

            <div>
                    <input type="checkbox" id="registrosDeArmas" name="registrosDeArmas" onChange={handleChangeCheckbox}/>
                    <label htmlFor="registrosDeArmas">
                            copia de registros de armas legible
                    </label>
                    <button onClick={() => detallesHandler('copia de registros de armas legible') }>Detalles...</button>
            </div>

            <div>
                    <input type="checkbox" id="certPsicologico" name="certPsicologico" onChange={handleChangeCheckbox}/>
                    <label htmlFor="certPsicologico">Cita para Certificado psicologico </label>
                    <button onClick={() => detallesHandler('en oficina martes 11:30 con cita - calendario digital') }>Detalles...</button>
            </div>


        </fieldset>



        <modal className={isActiveModal ? "detalles outModal" : "detalles inModal "}>
                <div className='detallesContent'>{detallesState}</div>
                <button className='btnCerrarModal' onClick={() => setIsActiveModal(!isActiveModal)}>Cerrar</button>
        </modal>

        <modalImg className={isActiveModalImg ? "detalles outModal" : "detalles inModal "}>
                <img  src={reqImg}  />
                <button className='btnCerrarModal' onClick={() => setIsActiveModalImg(!isActiveModalImg)}>Cerrar</button>
        </modalImg>


            




        </div>
    )
}
