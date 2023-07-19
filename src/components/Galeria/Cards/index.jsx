import MontarCard from '../MontarCard'

export default function Cards({fotos, styles}){
    return(
        <ul className={styles.galeria__cards}>
            {fotos.map((foto) =>{
                return <MontarCard key={foto.id} fotos={foto} styles={styles}/>
            })}
        </ul>
    )
}