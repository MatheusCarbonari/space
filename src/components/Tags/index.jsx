import styles from './Tags.module.scss'
import fotos from '../Galeria/fotos.json'

export default function Tags({tag, filtarFotos, setItens}){
    return(
        <div className={styles.tags}>
            <p>Filtre por tags:</p>
            <ul className={styles.tags__lista}>
                {tag.map((tag) => {    
                    return <li key={tag} onClick={() => filtarFotos(tag)} >{tag}</li>
                })}
                <li onClick={() => setItens(fotos)} >Todas</li>
            </ul>
        </div>
    )
}