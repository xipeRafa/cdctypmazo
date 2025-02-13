
import { useEffect, useState } from 'react'
// import { PostForm } from './PostForm';
import { useUsers } from '../../hooks'
// import logo from '../../assets/logo.png'



export const Users = () => {




    const { dataUsersGet, users, deleteUser, postUser, switchUser, setInfoToForm,
            editMode, newDataEdit, defaultModeEdith, uploadUserImg, usersFinder, 
            paginationSelect, paginationNext } = useUsers()




    useEffect(() => {
        dataUsersGet()
    }, [])




    const [requisitosState, setRequisitosState]=useState({scales:false, horns:false, scales1:false, horns1:false})

    const {scales, horns, scales1, horns1} = requisitosState

    // const [arrStateReq, setArrStateReq]=useState([])

    const handleChangeCheckbox =(e)=>{
           
            localStorage.checked=e.target.checked ? 'true' : 'false' 


            setRequisitosState({...requisitosState, [e.target.name]: e.target.checked })

            Object.values(requisitosState)

          

    }

    if(Object.values(requisitosState).filter(el => el === false).length === 0){
                 console.log('true')
    }else{
                console.log('else')
    }





    return (
        <div>

        <fieldset>
            <legend>Requisitos</legend>

            <div>
                    <input type="checkbox" id="scales" name="scales" value={scales ? 'true' : 'false'} onChange={handleChangeCheckbox}/>
                    <label htmlFor="scales">Scales</label>
            </div>

            <div>
                    <input type="checkbox" id="horns" name="horns" onChange={handleChangeCheckbox}/>
                    <label htmlFor="horns">Horns</label>
            </div>

              <div>
                    <input type="checkbox" id="scales1" name="scales1" onChange={handleChangeCheckbox}/>
                    <label htmlFor="scales1">Scales1</label>
            </div>

            <div>
                    <input type="checkbox" id="horns1" name="horns1" onChange={handleChangeCheckbox}/>
                    <label htmlFor="horns1">Horns1</label>
            </div>
        </fieldset>







        </div>
    )
}
