import { useDispatch, useSelector } from 'react-redux';
import { onChecking, onLogin, onLogout } from '../store/slices/authSlice'


import { useLocation } from 'react-router-dom';
import { errorConsoleCatch } from '../helpers'
import axiosApi from '../api/api';
import { clearAlertMessage, somethingWentWrong, somethingWentRigth } from  '../store/slices/alertSlice'


export const useAuth = () => {

    let location = useLocation();

    const { status, user } = useSelector(state => state.authSlice);
    const { sweetAlertMessage } = useSelector(state => state.alertSlice);

    const dispatch = useDispatch();


    //"warning", "error", "success","info"
    // function SweetAlertError(error){
    //     dispatch(somethingWentWrong(['Something Went Wrong', error?.response?.data?.errors[0]?.msg || 'working', 'error']))
    // }

    function SweetAlertError(){
        dispatch(somethingWentWrong(['Something Went Wrong', 'Algo Salio Mal' || 'working', 'error']))
    }




    function defaultAlert(){
        setTimeout(() => {
            dispatch(clearAlertMessage())
        }, 1000);
    }




    function saveLsData(DATA: { usuario: { nombre: string; uid: string; }; token: string; }){
        localStorage.setItem('step', '8');
        localStorage.setItem('status', 'authenticated');
        localStorage.setItem('UsersArray', '[{},{},{}]');
        localStorage.fallUsersArr = '[]'
        localStorage.UserDeletedArr = '[]'
        localStorage.UserDeletedArr = '[]'

        localStorage.setItem('userName', DATA.usuario.nombre);
        localStorage.setItem('uid', DATA.usuario.uid); 
        
        localStorage.setItem('token', DATA.token);
        localStorage.setItem('token-init-date', new Date().getTime());
        console.log('DATA :>> ', DATA);
    }




    const startLogin = async ({ correo, password }) => {

        dispatch(onChecking())

            let isThere = JSON.parse(localStorage.usersRegistered).some(el => el.correo === correo)

            if(isThere){

                    let user = JSON.parse(localStorage.usersRegistered).filter((el) => el.correo === correo)

                    if(user[0].password === password){
                            dispatch(onLogin({ nombre: user[0].nombre, uid: user[0].uid }));
                            localStorage.status = 'authenticated'
                            location.pathname = '/productos'
                    }else{
                            dispatch(somethingWentWrong(['Something Went Wrong', 'Contraseña Mal' || 'working', 'error']))
                    }       
  
            }else{
                     dispatch(somethingWentWrong(['Something Went Wrong', 'Correo Mal' || 'working', 'error']))
            }


        
        try {
                //const { data } = await axiosApi.post('/auth/login', { correo, password });
                //saveLsData(data)

                    
        } catch (error) {
                errorConsoleCatch(error) 
                SweetAlertError(error)
                dispatch(onLogout());
        }

    }




    const startRegister = async ({nombre, correo, password}) => {

            dispatch(onChecking()); 


            if(localStorage.usersRegistered == undefined){
                    localStorage.usersRegistered = JSON.stringify([])
            }

            let usersLS = JSON.parse(localStorage.usersRegistered)
            usersLS.push({ nombre, correo, password, uid:Date.now() })


            localStorage.usersRegistered = JSON.stringify(usersLS)

            location.pathname = '/*'
            

            try {
            
                    // const { data } = await axiosApi.post('/usuarios', { nombre, correo, password }); 
                    //dispatch(onLogin({ nombre: data.usuario.nombre, uid: data.usuario.uid }))
                    // saveLsData(data)
            
            } catch (error) {
                    errorConsoleCatch(error)
                    SweetAlertError(error)
                    dispatch(onLogout());
            }

    }






    const checkLogin = async () => {
        const token = localStorage.getItem('token');
        if (!token){ 
            return dispatch(onLogout())
        }
        
        try {
            // const { data } = await axiosApi.get('auth/renew');
            // dispatch(onLogin({ nombre:data.nombre, uid:data.uid }));
        } catch (error) {
            errorConsoleCatch(error)
            localStorage.clear();
            dispatch(onLogout());
        }
    } 






    const startLogout = () => {
        //localStorage.clear();
        localStorage.status = 'not-authenticated'
        dispatch(onLogout());
        pathname = '/*'
    }





    return {
        //* estado
        status,
        sweetAlertMessage,
        defaultAlert,
        user,

        //* Métodos
        checkLogin, 
        startLogin,
        startLogout,
        startRegister,
    }

}