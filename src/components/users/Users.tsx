
import { useEffect, useState } from 'react'
// import { PostForm } from './PostForm';
import { useUsers } from '../../hooks'
// import logo from '../../assets/logo.png'

import './users.css';




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

     console.log(isActiveModal)

    return (
        <div>

        {/*<h2>Sistema para Inscripciones</h2>*/}


        <br />
        <br />
        <br />

        <fieldset>
            <legend>Requisitos Documentacion para Inscripciones</legend>

            <div>
                    <input type="checkbox" id="cartillaMilitar" name="cartillaMilitar" value={cartillaMilitar ? 'true' : 'false'} onChange={handleChangeCheckbox}/>
                    <label htmlFor="cartillaMilitar">cartilla militar liberada o excepción</label>
                    <button onClick={() => setIsActiveModal(!isActiveModal)}>Detalles..</button>
                    {/*en su defecto carta de excepción de cartilla militar*/}
            </div>

            <div>
                    <input type="checkbox" id="cartaNoAntecedentes" name="cartaNoAntecedentes" onChange={handleChangeCheckbox}/>
                    <label htmlFor="cartaNoAntecedentes">carta no antecedentes penales Federal</label>
                    <button>Detalles..</button>
            </div>

              <div>
                    <input type="checkbox" id="certPsicologico" name="certPsicologico" onChange={handleChangeCheckbox}/>
                    <label htmlFor="certPsicologico">certificado psicologico </label>
                    <button>Detalles..</button>
                    {/*(en oficina) martes 11:30 ( con cita ) - calendario digital*/}
            </div>

            <div>
                    <input type="checkbox" id="cartaDeTrabajo" name="cartaDeTrabajo" onChange={handleChangeCheckbox}/>
                    <label htmlFor="cartaDeTrabajo">
                            carta de trabajo 
                    </label>
                    <button>Detalles..</button>
            </div>

              <div>
                    <input type="checkbox" id="comprobanteDeDomicilio" name="comprobanteDeDomicilio" onChange={handleChangeCheckbox}/>
                    <label htmlFor="comprobanteDeDomicilio">
                            comprobante de domicilio reciente 
                    </label>
                    <button>Detalles..</button>
            </div>






              <div>
                    <input type="checkbox" id="antidopin" name="antidopin" onChange={handleChangeCheckbox}/>
                    <label htmlFor="antidopin">antidopin toxicologico</label>
                    <button>Detalles..</button>
            </div>


              <div>
                    <input type="checkbox" id="certificadoMedico" name="certificadoMedico" onChange={handleChangeCheckbox}/>
                    <label htmlFor="certificadoMedico">certificado medico </label>
                    <button>Detalles..</button>
            </div>

            <div>
                    <input type="checkbox" id="ine" name="ine" onChange={handleChangeCheckbox}/>
                    <label htmlFor="ine">
                            INE
                    </label>
                    <button>Detalles..</button>
            </div>


              <div>
                    <input type="checkbox" id="fotos" name="fotos" onChange={handleChangeCheckbox}/>
                    <label htmlFor="fotos">fotografia a color  </label>
                    <button>Detalles..</button>
                    {/*fondo blanco a color sin lentes*/}
            </div>

            <div>
                    <input type="checkbox" id="registrosDeArmas" name="registrosDeArmas" onChange={handleChangeCheckbox}/>
                    <label htmlFor="registrosDeArmas">
                            copia de registros de armas legible
                    </label>
                    <button>Detalles..</button>
            </div>



        </fieldset>


         <modal className={isActiveModal ? "detalles outModal" : "detalles inModal "}>
                <button className='btnCerrarModal' onClick={() => setIsActiveModal(!isActiveModal)}>Cerrar</button>
        </modal>







        </div>
    )
}
