export default function Imagem({fotos, styles}){
    return(
        <img
            className={styles.galeria__imagem}
            src={fotos.imagem}
            alt={fotos.titulo} 
        />
    )
}