

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
            <p>CAZADORES Y TIRADORES DEL DESIERTO DE SONORA, A. C.</p> 
            <p>SAN LUIS POTOSI No. 158, COL. SAN BENITO, C.P.83190, HERMOSILLO, SON</p> 
    </div>
  )
}
