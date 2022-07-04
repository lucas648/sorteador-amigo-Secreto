import { useListaParticipantes } from "../../state/hooks/useListaParticipantes"
import sacolas from '../../images/sacolas.png'
import listStyle from './Lista.module.scss'

export default function ListaParticipantes(){
  const participantes: string[] = useListaParticipantes();
  return(
    <>
      <img
        src={sacolas}
        className={listStyle.image}
      />
      <ul className={listStyle.lista}>
        {participantes.map( 
          participante => 
            <li 
              key={participante}
            >
              {participante}
            </li>
          )
        }
      </ul>
    </>

  )
}