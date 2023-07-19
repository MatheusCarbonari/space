import CardsPopulares from './FotosPopulares'
import FotosPopulares from './fotos-populares.json'
import styles from './Populares.module.scss'
import Botao from 'components/botao'
import { useState } from 'react'

export default function Populares(){

    const [retorno, setRetorno] = useState('')

    const resposta = () =>{
        return (
            setRetorno(
                <p className={styles.erro}>Infelizmente não possuimos mais fotos</p>
            )
        )
    }

    return (
        <aside className={styles.populares}>
            <h2>Populares</h2>
            <ul className={styles.populares__imagens}>
                {FotosPopulares.map((imagens) => {
                    return <CardsPopulares key={imagens.id} fotos={imagens}/>
                })}
            </ul>
            <Botao styles={styles} resposta={resposta}/>
            <div>{retorno}</div>
        </aside>
    )
}