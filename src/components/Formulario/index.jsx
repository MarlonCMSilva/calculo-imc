import { useEffect, useState } from 'react'


import styles from './Formulario.module.css'

const Tabela = () => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);

    const calculo = peso /  (altura * altura) ;
    const resultado = calculo.toFixed(2);
    
    const imc = () => {
        if(resultado >= 40) {
            return (
                <p>Classificação: Obesidade Grave</p>
            )
        }else if(resultado >= 30){
            return (
                <p>Classificação: Obesidade</p>
            )
        }else if (resultado >= 25 ){
            return (
                <p>Classificação: SobrePeso</p>
            )
        }else if(resultado >= 18.5 ) {
            return (
                <p>Classificação: Normal</p>
            )
        }else {
            return(
                <p>Classificação: Magreza</p>
            )
        } 
        
    }

    const [imcVisivel, setImcVisivel] = useState(false); 

    useEffect(() => {

    }, [])
    
    
    return (
        <>
    <div className={styles.container}>
    <form className={styles.formulario}>
        <span>Altura</span>    
        <input type="number" placeholder='altura'  required  onChange={evento => setAltura(parseFloat(evento.target.value))}/>
        <span>Peso</span >
        <input type="number" placeholder='Peso' required  onChange={evento => setPeso(parseFloat(evento.target.value))} />
    </form>
    

    {!imcVisivel && (
        <>
        <button onClick={() => setImcVisivel(!imcVisivel)} type="button">Calcular</button>
        <div className={styles.resultadoImc}>
        <span>Seu IMC:</span>
        </div>
        </>
    )}
    
    
    {imcVisivel && (
        <>
        <button onClick={() => setImcVisivel(!imcVisivel)} type="button">Esconder</button>
        <div className={styles.resultadoImc}>
        <span>Seu IMC:</span>
        <strong>{resultado}</strong>
        </div>
        <div className={styles.resultadoTexto}>
            <p>{imc()}</p>
        </div>
        </>
    )} 
</div>
    </>
    )
}

export default Tabela