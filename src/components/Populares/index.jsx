import CardsPopulares from './FotosPopulares'
import FotosPopulares from './fotos-populares.json'
import styles from './Populares.module.scss'

export default function Populares(){
    return (
        <aside className={styles.populares}>
            <h2>Populares</h2>
            <ul className={styles.populares__imagens}>
                {FotosPopulares.map((imagens) => {
                    return <CardsPopulares key={imagens.id} fotos={imagens}/>
                })}
            </ul>
            <button>Ver mais fotos</button>
        </aside>
    )
}