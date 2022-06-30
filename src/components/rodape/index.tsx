import { useNavigate } from "react-router-dom";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes"

export default function Rodape(){

  const participantes = useListaParticipantes();

  const navegarPara = useNavigate()

  const iniciar = ()=>{
    navegarPara('/sorteio')
  }

  return(
    <footer>
      <button 
        onClick={iniciar}
        disabled={participantes.length < 3}
      >
        Iniciar Brincadeira
      </button>
    </footer>
  )
}