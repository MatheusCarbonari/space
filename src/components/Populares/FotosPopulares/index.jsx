export default function CardsPopulares({fotos}){
    return(
        <li key={fotos.id}>
            <img src={fotos.path} alt={fotos.alt} />
        </li>
    )
}