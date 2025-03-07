
import { useEffect, useState } from 'react'
import { PostForm } from './users/PostForm';
import { useUsers } from '../hooks'
// import logo from '../../assets/logo.png'

import './users/users.css';
import { useLocation} from 'react-router-dom';









export const Categorias = () => {
 let location = useLocation();
console.log(location)

    const { dataUsersGet, users, deleteUser, postUser, switchUser, setInfoToForm,
            editMode, newDataEdit, defaultModeEdith, uploadUserImg, usersFinder, 
            paginationSelect, paginationNext } = useUsers()









    const [requisitosState, setRequisitosState]=useState({

        cartaNoAntecedentes:false, 
        certPsicologico:false, 
        cartaDeTrabajo:false,

        comprobanteDeDomicilio:false, 
        antidopin:false,
        examenToxicologico:false, 
        certificadoMedico:false, 

    })

    

    // localStorage.req = JSON.stringify(requisitosState) 



    // const {cartillaMilitar, horns, scales1, horns1} = requisitosState


    // const [arrStateReq, setArrStateReq]=useState([])


    const [formContanct, setFormContact]=useState(false)

    if(localStorage.reqRen === undefined){
            localStorage.reqRen = JSON.stringify(requisitosState)  
    }
     


    const handleChangeCheckbox =(e)=>{

            setRequisitosState({...requisitosState, [e.target.name]: e.target.checked })

            let nnewv = JSON.parse(localStorage.reqRen)

            nnewv[e.target.name] = e.target.checked

            localStorage.reqRen = JSON.stringify(nnewv) 
      
    }




    if(Object.values(JSON.parse(localStorage.reqRen)).filter(el => el === false).length === 0){
            if(formContanct===false){
                    setFormContact(true)
                    window.scrollTo({ top: 0 })
            }
    }







    const [isActiveModal, setIsActiveModal] = useState(true);

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

            <legend style={{backgroundColor:'#3e5f8a'}}>Documentación para Renovaciones</legend>

            <div>
                    <input type="checkbox" id="comprobanteDeDomicilio" name="comprobanteDeDomicilio" onChange={handleChangeCheckbox}
                        checked={JSON.parse(localStorage.reqRen).comprobanteDeDomicilio ? true : false}
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
                         checked={JSON.parse(localStorage.reqRen).cartaNoAntecedentes ? true : false}
                    />
                    <label htmlFor="cartaNoAntecedentes">carta no antecedentes penales Federal</label>
                    <button onClick={() => detallesHandler('Detalles ?') }>Detalles...</button>
            </div>



           



            <div>
                    <input type="checkbox" id="cartaDeTrabajo" name="cartaDeTrabajo" onChange={handleChangeCheckbox}
                        checked={JSON.parse(localStorage.reqRen).cartaDeTrabajo ? true : false}
                    />
                    <label htmlFor="cartaDeTrabajo">
                            carta de trabajo 
                    </label>
                    <button onClick={() => detallesHandler('carta de trabajo ') }>Detalles...</button>
            </div>

            






              <div>
                    <input type="checkbox" id="antidopin" name="antidopin" onChange={handleChangeCheckbox}
                         checked={JSON.parse(localStorage.reqRen).antidopin ? true : false}
                    />
                    <label htmlFor="antidopin">Antidoping</label>
                    <button onClick={() => detallesHandler('antidopin') }>Detalles...</button>
            </div>


            <div>
                    <input type="checkbox" id="examenToxicologico" name="examenToxicologico" onChange={handleChangeCheckbox}
                         checked={JSON.parse(localStorage.reqRen).examenToxicologico ? true : false}
                    />
                    <label htmlFor="examenToxicologico">Examen Toxicologico</label>
                    <button onClick={() => detallesHandler('Examen toxicologico') }>Detalles...</button>
            </div>


              <div>
                    <input type="checkbox" id="certificadoMedico" name="certificadoMedico" onChange={handleChangeCheckbox}
                         checked={JSON.parse(localStorage.reqRen).certificadoMedico ? true : false}
                    />
                    <label htmlFor="certificadoMedico">certificado medico </label>
                    <button onClick={() => detallesHandler('certificado medico') }>Detalles...</button>
            </div>


            <div>
                    <input type="checkbox" id="certPsicologico" name="certPsicologico" onChange={handleChangeCheckbox}
                        checked={JSON.parse(localStorage.reqRen).certPsicologico ? true : false}
                    />
                    <label htmlFor="certPsicologico">Cita para Certificado psicologico </label>
                    <button onClick={() => detallesHandler('en oficina martes 11:30 con cita - calendario digital') }>Detalles...</button>
            </div>


        </fieldset>



        <modal className={isActiveModal ? "detalles outModal" : "detalles inModal "}>
                
                <button className='btnCerrarModal' onClick={() => setIsActiveModal(!isActiveModal)}>Cerrar ✘ </button>
                <div className='detallesContent'>{detallesState}</div>
        </modal>



        <div className={formContanct ? '' : 'd-none'}>
            <PostForm postUser={postUser} setFormContact={setFormContact} location={location}/> 
        </div> 

        <div className='Agendar'>
            <button className='button' onClick={()=>{setFormContact(true), window.scrollTo({ top: 0 })}}> Agendar Examen Psicologico </button>
        </div>



        </div>
    )
}

