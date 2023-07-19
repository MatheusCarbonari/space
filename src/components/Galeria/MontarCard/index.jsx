import Descricao from "./MontarDescricao";
import Imagem from "./MontarImagem";

export default function MontarCard({fotos, styles}){
    return (
        <li key={fotos.id} className={styles.galeria__card}>
            <Imagem fotos={fotos} styles={styles}/>
            <Descricao fotos={fotos} styles={styles}/>
        </li>
    )
}