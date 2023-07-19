import favorito from '../../favorito.png'
import open from '../../open.png'

export default function Descricao({fotos, styles}){
    return (
        <>
            <p className={styles.galeria__descricao}>{fotos.titulo}</p>
            <div>
                <p>{fotos.creditos}</p>
                <span>
                    <img src={favorito} alt="Ícone coração de curtir" />
                    <img src={open} alt="Ícone de abrir modal" />
                </span>
            </div>
        </>
    )
}