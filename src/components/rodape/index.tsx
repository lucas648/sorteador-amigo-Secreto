import { useNavigate } from "react-router-dom";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes"
import { useSorteador } from "../../state/hooks/useSorteador";

import rodapeStyles from './Rodape.module.scss'

export default function Rodape(){

  const participantes = useListaParticipantes();

  const navegarPara = useNavigate();

  const sortear = useSorteador();

  const iniciar = ()=>{
    sortear();
    navegarPara('/sorteio');
  }

  return(
    <footer className={rodapeStyles.rodapeConfiguracoes}>
      <button 
        className={rodapeStyles.botao}
        onClick={iniciar}
        disabled={participantes.length < 3}
      >
        Iniciar Brincadeira
      </button>
    </footer>
  )
}