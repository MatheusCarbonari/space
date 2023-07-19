import logo from './img/logo.png'
import search from './img/search.png'
import styles from './cabecalho.module.scss'

export default function Cabecalho(){
    return (
        <header className={styles.cabecalho}>
            <img src={logo} alt="logo do space"/>
            <div className={styles.cabecalho__container}>
                <input className={styles.cabecalho__input} type="text" placeholder="O que você procura?"/>
                <img src={search} alt="ícone de busca"/>
            </div>
        </header>
    )
}