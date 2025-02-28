
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux'
import axiosApi from '../api/api'

import { errorConsoleCatch, toggleExplorer, 
          editExplorer, finderExplorer, postExplorer,
          paginationExplorer, nextExplorer, deleteExplorer} from '../helpers'

import {defaultEditMode, usersDataPush, userDeleteView, switchUserView, editUserView} from  '../store/slices/usersSlice'
import { somethingWentWrong, somethingWentRigth } from  '../store/slices/alertSlice'








import { firestoreDB } from '../firebase/firebaseConfig';

import { collection, addDoc } from 'firebase/firestore'






export const useUsers = () => {

    const { users, editMode } = useSelector(state => state.usersSlice)

    const dispatch = useDispatch()
  

  //"warning", "error", "success","info"
    function SweetAlertError(error){
        dispatch(somethingWentWrong(['Something Went Wrong', error?.response?.data?.errors[0]?.msg || 'working', 'error']))
    }

  // let usersLSArr =     JSON.parse(localStorage.UsersArray ) 
  // let fallUsersArr =   JSON.parse(localStorage.fallUsersArr )
  // let UserDeletedArr = JSON.parse(localStorage.UserDeletedArr) 
 
  // function UpDateDB(){
  //     fallUsersArr.length>=1 && reWrite()
  //     UserDeletedArr.length>=1 && reDelete()
  // } 

    





    const dataUsersGet = async (from=0, limit=8) => {



        // const [items, setItems] = useState([])

        // const itemCollection = collection(firestoreDB, 'caza')

     

        

        //     getDocs(itemCollection)
        //       .then((querySnapshot) => {
        //           if (querySnapshot.size === 0) {
        //               console.log('No results!')
        //           }

        //           const documents = querySnapshot.docs.map((doc) => ({
        //               id: doc.id,
        //               ...doc.data(),
        //           }))

        //           console.log(documents)
        //       })
        //       .catch((err) => {
        //           console.log('Error searching items', err)
        //       });





          // const { data } = await axiosApi.get(`/usuarios/${from}/${limit}`)
          // //console.log('dataUsers limit 8:', data)
          

           
            // //console.log('typeof Data', data)

            // const alls = await axiosApi.get(`/usuarios/0/${data.total}`)

            //  localStorage.UsersArray = JSON.stringify([...alls.data.usuarios, ...fallUsersArr])  



            // let usersGet = [
            //   {nombre:'juan0', correo:'juan@gmail.com', rol:'user', uid:1234561, estado:true, google:false, toggle:false, img:'https://plus.unsplash.com/premium_photo-1678233035759-89e0ab1062de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JTIwY2F0JUMzJUIzbGljYXxlbnwwfHwwfHx8MA%3D%3D' },
            //   {nombre:'juan1', correo:'juan@gmail.com', rol:'user', uid:1234562, estado:true, google:false, toggle:false, img:'https://images.unsplash.com/photo-1506451778068-985b98c0de18?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JTIwY2F0JUMzJUIzbGljYXxlbnwwfHwwfHx8MA%3D%3D' },
            //   {nombre:'juan2', correo:'juan@gmail.com', rol:'user', uid:1234563, estado:true, google:false, toggle:false, img:'https://images.unsplash.com/photo-1528357136257-0c25517acfea?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JTIwY2F0JUMzJUIzbGljYXxlbnwwfHwwfHx8MA%3D%3D' },
            //   {nombre:'juan3', correo:'juan@gmail.com', rol:'user', uid:1234564, estado:true, google:false, toggle:false, img:'https://images.unsplash.com/photo-1594857373854-0314626c18e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JTIwY2F0JUMzJUIzbGljYXxlbnwwfHwwfHx8MA%3D%3D' },
            //   {nombre:'juan4', correo:'juan@gmail.com', rol:'user', uid:1234565, estado:true, google:false, toggle:false, img:'https://images.unsplash.com/photo-1546718876-2d05e6e23046?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8JTIwY2F0JUMzJUIzbGljYXxlbnwwfHwwfHx8MA%3D%3D' },
            //   {nombre:'juan5', correo:'juan@gmail.com', rol:'user', uid:1234566, estado:true, google:false, toggle:false, img:'https://images.unsplash.com/photo-1470859685138-71dd60ed39b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fCUyMGNhdCVDMyVCM2xpY2F8ZW58MHx8MHx8fDA%3D' },
            //   {nombre:'juan6', correo:'juan@gmail.com', rol:'user', uid:1234567, estado:true, google:false, toggle:false, img:'https://plus.unsplash.com/premium_photo-1677959658600-bbb6fbcc6890?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8JTIwY2F0JUMzJUIzbGljYXxlbnwwfHwwfHx8MA%3D%3D' },
            //   {nombre:'juan7', correo:'juan@gmail.com', rol:'user', uid:1234568, estado:true, google:false, toggle:false, img:'https://images.unsplash.com/photo-1531262549175-6ede6f8a91d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fCUyMGNhdCVDMyVCM2xpY2F8ZW58MHx8MHx8fDA%3D' },
            //   {nombre:'juan8', correo:'juan@gmail.com', rol:'user', uid:1234569, estado:true, google:false, toggle:false, img:'https://plus.unsplash.com/premium_photo-1678233035754-8ea508fb30b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fCUyMGNhdCVDMyVCM2xpY2F8ZW58MHx8MHx8fDA%3D' },
            //   {nombre:'juan9', correo:'juan@gmail.com', rol:'user', uid:1234560, estado:true, google:false, toggle:false, img:'https://images.unsplash.com/photo-1553906451-86e5710d388e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fCUyMGNhdCVDMyVCM2xpY2F8ZW58MHx8MHx8fDA%3D' },
            //   {nombre:'juan10', correo:'juan@gmail.com', rol:'user', uid:12345611, estado:true, google:false, toggle:false, img:'https://images.unsplash.com/photo-1541657160149-b58d4e0d3c83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fCUyMGNhdCVDMyVCM2xpY2F8ZW58MHx8MHx8fDA%3D' },
            //   {nombre:'juan11', correo:'juan@gmail.com', rol:'user', uid:12345612, estado:true, google:false, toggle:false, img:'https://images.unsplash.com/photo-1586015530974-66bba8e530ae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fCUyMGNhdCVDMyVCM2xpY2F8ZW58MHx8MHx8fDA%3D' }
            // ]




            // if(localStorage.UsersArray == undefined){
            //     localStorage.UsersArray = JSON.stringify(workshops)
            //     dispatch(usersDataPush(workshops)) 
            // }  
            
            // localStorage.UsersArray = JSON.stringify(workshops) //comentar en desarrollo
            // dispatch(usersDataPush(workshops)) // comentar en desarrollo
              
            // localStorage.UsersTotal = JSON.stringify(JSON.parse(localStorage.UsersArray).length)
            // localStorage.step = '8'
        
            // dispatch(usersDataPush({usuarios:JSON.parse(localStorage.UsersArray)}))

            // localStorage.UsersTotal = data.total  
            // paginationSelect(8)
      
      try { 
      } catch (error) {
          dispatch(usersDataPush({usuarios: usersLSArr})) 
          paginationSelect(8)
          localStorage.UsersTotal = usersLSArr.length

          SweetAlertError(error)
          errorConsoleCatch('dataUsersGet:',error)
      }
  }



  



/* -=-=-=-=-=-=-=-=-=--=- POST =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- post =-=-=-=-=-=-=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=--=- POST =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- post =-=-=-=-=-=-=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=--=- POST =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- post =-=-=-=-=-=-=-=-=-=-=- */

// online solo arriba
// offline abajo + arriba 

  const postUser = async ({ nombre,correo,telefono }) => {







        const postCollectionCaza = collection(firestoreDB, 'caza');

        addDoc(postCollectionCaza, { nombre,correo,telefono, idDate:Date.now() })
            .then((resp) => {
                console.log(resp)
            })
            .catch((error) => { 
                console.log('caza -=-=-=-=-=-= Error')
                console.log(error)
            })



          
      try {
          // const { newArray } = postExplorer(false, { nombre, correo, password })
          // dispatch(usersDataPush({usuarios:newArray})) 

          // const { data } = await axiosApi.post('/usuarios', { nombre, correo, password })
          // dispatch(usersDataPush({usuarios:[data.usuario]})) 
          // console.log('data', data)
          // UpDateDB()



      } catch (error) {  // aqui se ejecuta cuando esta offline
          const { newArray } = postExplorer(true, { nombre, correo, password })
          dispatch(usersDataPush({usuarios: newArray})) 

          //SweetAlertError(error)
          /* errorConsoleCatch(error) */
      }  
  }




  // function reWrite() {
  //     for (let index = 0; index < fallUsersArr.length; index++) {  
  //         const { nombre, correo, password, uid } = fallUsersArr[index]
  //         reWriteId({ nombre, correo, password, uid })
  //     } 

  //     localStorage.fallUsersArr = '[]'  
  // }



  // function reDelete() {  
  //     for (let index = 0; index < UserDeletedArr.length; index++) {  
  //         const { uid } = UserDeletedArr[index]
  //         reDeleteById({ uid })
  //     } 

  //     localStorage.UserDeletedArr = '[]'
  // }




  // async function reWriteId({ nombre, correo, password, uid }){
  //     try {

  //         if(uid.slice(0,8) === 'frontend'){
  //             const { data } = await axiosApi.post('/usuarios', { nombre, correo, password }) 
  //             console.log('objs with new Mongo Id', data)
  //         }else{
  //           const { data } = await axiosApi.put(`/usuarios/${uid}`, { nombre, correo })
  //           console.log('objs with new Edit save', data)
  //         } 
    
  //     } catch (error) {  // aqui se ejecuta cuando esta offline
  //         console.log('reWriteId error :>>', error)
  //         //SweetAlertError(error)
  //         errorConsoleCatch(error)
  //     } 
  // }




  // async function reDeleteById({ uid }){
  //     try {
  //         if(uid.slice(0,8) === 'frontend'){
  //             console.log('no Delete in DB cose there is not there')
  //         }else{
  //             await axiosApi.delete(`/usuarios/${uid}`) 
  //             console.log('objs Deleted of DB')
  //         } 
  //     } catch (error) {  // aqui se ejecuta cuando esta offline
  //         console.log('reDeleteById error :>>', error)
  //         //SweetAlertError(error)
  //         errorConsoleCatch(error)
  //     } 
  // }


/* -=-=-=-=-=-=-=-=-=--=- POST END =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- post end =-=-=-=-=-=-=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=--=- POST END =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- post end =-=-=-=-=-=-=-=-=-=-=- */
/* -=-=-=-=-=-=-=-=-=--=- POST END =-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=- post end =-=-=-=-=-=-=-=-=-=-=- */














  const setInfoToForm = (el:Object) => {
       dispatch(editUserView(el))
   }





  const newDataEdit = async (lugar,calle,colonia,dia,hora,informes,fechaDeInicio,para, uid) => { 


          let curretUsers = JSON.parse(localStorage.UsersArray)

          let editedUsers = curretUsers.map((el) => (el.uid === uid ? {...editMode, lugar,calle,colonia,dia,hora,informes,fechaDeInicio,para} : el))
         
          localStorage.UsersArray = JSON.stringify(editedUsers)

          dispatch(usersDataPush({usuarios:JSON.parse(localStorage.UsersArray)}))

          dispatch(defaultEditMode()) 

      try {


          // const { objTarget } = editExplorer(false, {uid}, fallUsersArr, usersLSArr, {nombre}, {correo})
          // dispatch( usersDataPush({usuarios:[objTarget]}))
        
          // await axiosApi.put(`/usuarios/${uid}`, { nombre, correo })
          // UpDateDB()
      } catch (error) {
          console.log('newDataEdit error :>>', error)
          const { objTarget } = editExplorer(true, {uid}, fallUsersArr, usersLSArr, {nombre}, {correo})
          dispatch( usersDataPush({usuarios:[objTarget]}))

          dispatch(defaultEditMode()) 
          //SweetAlertError(error)
          errorConsoleCatch(error)
      }
      
  }



  const defaultModeEdith = () => {
      dispatch(defaultEditMode())
  }




  const deleteUser = async (usuario: Object) => {

          let curretUsers = JSON.parse(localStorage.UsersArray)
          let del = curretUsers.filter((el) => el.uid !== usuario.uid)
          localStorage.UsersArray = JSON.stringify(del)
          dispatch(usersDataPush({usuarios:JSON.parse(localStorage.UsersArray)}))
          dispatch(somethingWentRigth(['Taller fue Borrado', usuario.colonia + ' ya no existe ', 'success']))

      try {
          // const { usuarios } = deleteExplorer(usuario.uid, usersLSArr, fallUsersArr)
          // dispatch(userDeleteView({usuarios:usuarios})) 

          // await axiosApi.delete(`/usuarios/${usuario.uid}`) 
          // dispatch(somethingWentRigth(['Usuario fue Borrado', usuario.correo + ' ya no existe ', 'success']))
          // UpDateDB()
      } catch (error) {
          console.log('deleteUser error :>>', error)
          //SweetAlertError(error)
          errorConsoleCatch(error)
      } 
  }




  // const switchUser = async (usuario) => {

  //         let curretUsers = JSON.parse(localStorage.UsersArray)
         
  //         curretUsers.map((el) => (el.uid === usuario.uid ? (el.toggle = !el.toggle) : el))
  //         localStorage.UsersArray = JSON.stringify(curretUsers)

  //         dispatch(switchUserView({usuarios:JSON.parse(localStorage.UsersArray)}))
  //         dispatch(somethingWentRigth(['Usuario switched', usuario.toggle + ' to ' + !usuario.toggle , 'success']))

  //     try {
  //         // const { objTarget } = toggleExplorer(false, {uid}, usuario, 'toggle', usersLSArr, fallUsersArr) 
  //         // dispatch(switchUserView({usuarios:[objTarget]})) 
          
  //         // await axiosApi.patch(`/usuarios/toggle/${usuario.uid}`)
  //         // dispatch(somethingWentRigth(['Usuario switched', usuario.toggle + ' to ' + objTarget.toggle , 'success']))

  //         // UpDateDB()
  //     } catch (error) {
  //         console.log('switchUser error :>>', error)
  //         const { objTarget } = toggleExplorer(true, {uid}, usuario, 'toggle', usersLSArr, fallUsersArr)
  //         dispatch(switchUserView({usuarios:[objTarget]}))  
  //         //SweetAlertError(error) 
  //         errorConsoleCatch(error) 
  //     } 
  // }
  



  // const uploadUserImg = async(uid, file) => {

  //   console.log(file)
  //   localStorage.setItem("urlImgLSRedux", URL.createObjectURL(file));
  //     try {
  //         // const { data } = await axiosApi.put(`/uploads/usuarios/${uid}`, {file},{
  //         // headers: {
  //         //   "Content-Type": "multipart/form-data",
  //         // }})

  //         // dispatch(somethingWentRigth(['Foto fue Actualizada', 'Con Exito!!', 'success']))  

  //         // let img = data.img
  //         // const { objTarget } = editExplorer(false, {uid}, [], users.usuarios, {img})
  //         // dispatch(usersDataPush({ usuarios:[objTarget] })) 
  //         // UpDateDB()  
  //     } catch (error) {
  //         console.log('switchUser error :>>', error)
  //         SweetAlertError(error)
  //         errorConsoleCatch(error)
  //     }
  // }






  const usersFinder = async (v:String, colonia) => {



        if(colonia==='colonia'){

            if(v.length > 3){
                const { upFirstLe, upperCase, lowerCase } = finderExplorer(v, colonia)

                // console.log(upFirstLe, upperCase, lowerCase)
              
                dispatch(usersDataPush( {usuarios:[...upFirstLe, ...upperCase, ...lowerCase ]} ))
 
            }else{
                dispatch(usersDataPush({usuarios:JSON.parse(localStorage.UsersArray)}))
            }


        }else{





                if(colonia==='Jovenes' || colonia==='Matrimonios'){

                            const { upFirstLe } = finderExplorer(v, colonia)

                            dispatch(usersDataPush( {usuarios:upFirstLe} ))

                }else{
                       // LUGAR ============
                    if(v.length > 3){
                        const { upFirstLe, upperCase, lowerCase } = finderExplorer(v)

                            // console.log(upFirstLe, upperCase, lowerCase)

                            // upFirstLe.length>=1 ? dispatch(usersDataPush({usuarios:upFirstLe})): null
                            // upperCase.length>=1 ? dispatch(usersDataPush({usuarios:upperCase})): null
                            // lowerCase.length>=1 ? dispatch(usersDataPush({usuarios:lowerCase})): null
                          // emailFind.length>=1 ? dispatch(usersDataPush({usuarios:emailFind})): null
              
                                dispatch(usersDataPush( {usuarios:[...upFirstLe, ...upperCase, ...lowerCase ]} ))
              
                            /*const {data} = await axiosApi.get(`/buscar/usuarios/${v}`) 
                            dispatch(usersDataPush({usuarios:data.results}))  */ 
                      }else{
                                dispatch(usersDataPush({usuarios:JSON.parse(localStorage.UsersArray)}))
                      }
                }

           


        }

          




      try {

      } catch (error) {
          console.log('usersFinder error :>>', error)
          SweetAlertError(error)
          errorConsoleCatch(error)
      }
  }


  // const paginationSelect=(v:Number)=>{
  //     const { arr } = paginationExplorer(v)
  //     dispatch(usersDataPush({usuarios: arr }) ) 
  //     /*  dataUsersGet(v -8, v) */ 
  // }


  // const paginationNext =(boo:Boolean, n=8)=>{
  //     const { arr } = nextExplorer(boo, n)
  //     dispatch(usersDataPush({usuarios: arr }) )
  //     // let step = localStorage.step
  //     // dataUsersGet(step -n, step) 
  // }






  return {
    dataUsersGet,
    deleteUser,
    // switchUser,
    postUser,

    //edit
    setInfoToForm,
    newDataEdit,
    defaultModeEdith,
    // uploadUserImg,
    //finder
    usersFinder,
    // paginationSelect,
    // paginationNext,


    //states
    editMode,
    users,
  }
}
