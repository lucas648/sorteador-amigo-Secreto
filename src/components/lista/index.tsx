import { useListaParticipantes } from "../../state/hooks/useListaParticipantes"
import sacolas from '../../images/sacolas.png'
import listStyle from './Lista.module.scss'

export default function ListaParticipantes(){
  const participantes: string[] = useListaParticipantes();
  return(
    <div style={{display: 'flex'}}>
      <div className={listStyle.image1}>
        <img
          src={sacolas}
        />
      </div>
      <div>
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
      </div>
      <div className={listStyle.image2}>
        <img
          src={sacolas}
        />
      </div>
    </div>

  )
}