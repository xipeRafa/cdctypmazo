

export const Footer = () => {

    const character = {

        backgroundColor: 'black',
        position: 'absolute',
        bottom: '0',
        width: '100%',
        height: '200px', //margin-botton tiene que tener 100 mas en body{}
        color: 'white',
        marginTop:'50px',
        padding:'50px'

    }

  return (
    <div style={character}> 
        <p>  Club Deportivo de Caza, Tiro y Pesca Mazocahui, A.C.</p> 
    </div>
  )
}
