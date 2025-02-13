import { Link } from 'react-router-dom';

export const Nav = ({ startLogout, status, user }) => {


  return (
    <div className="navbar navbar-dark bg-black mb-4 px-4">

        <span className="navbar-brand">
            <i className="fas fa-calendar-alt"></i>&nbsp;
             { user } Club Deportivo de Caza, Tiro y Pesca Mazocahui, A.C.
        </span>
{/*
        { status &&
        
        }*/}

    {/*  { localStorage.status == 'authenticated' &&  */}
          <div>
                 {/*<span>
                  <Link style={{color:"white"}} to="/users"      className='mx-5'>Users     </Link>
                    <Link style={{color:"white"}} to="/productos"  className='mx-5'>Productos </Link>
                    <Link style={{color:"white"}} to="/categorias" className='mx-5'>Categorias</Link>
                  </span>*/}

                <Link className="btn btn-primary mx-5"  to="/cdctypmazo" >
                    Inscripción
                </Link>

                <Link className="btn btn-outline-danger" to="/cdctypmazo/auth/login" onClick={ startLogout }>
                    <i className="fas fa-sign-out-alt"></i> salir
                </Link>

               
{/*
              <a href="https://api.whatsapp.com/send?phone=526621891032&text=Linea de Soporte App Directorio TOV Hermosillo Sonora" target='_blank' style={{textDecoration:'none'}}>
                  <img className='whatsapp' src={whatsapp} alt="whatsapp" />
                  <span style={{fontSize:'24px'}}> 📲</span>
              </a>*/}
          </div>

    {/*     } */}

    </div>
  )

}
