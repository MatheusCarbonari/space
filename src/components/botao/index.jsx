export default function Botao({styles, resposta}){
    return (
        <div className={styles.populares__imagens}>
            <button onClick={resposta}>Veja mais fotos</button>
        </div>
    )
}