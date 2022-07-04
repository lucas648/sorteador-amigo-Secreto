import { useState } from "react";
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes"
import { useResultadoDoSorteio } from "../../state/hooks/useResultadoDoSorteio";

import sorteioStyles from './Sorteio.module.scss'
import aviao from '../../images/aviao.png'

export default function Sorteio(){
  
  const [participanteDaVez,setParticipanteDaVez] = useState('');
  const [amigoSecreto,setAmigoSecreto] = useState('');

  const participantes = useListaParticipantes();

  const resultado = useResultadoDoSorteio();

  const sortear = (evento:React.FormEvent<HTMLFormElement>) =>{
    evento.preventDefault();
    if(resultado.has(participanteDaVez)){
      setAmigoSecreto(resultado.get(participanteDaVez)!)
    }
  }

  return(
    <section className={`${sorteioStyles.sorteio} ${sorteioStyles.container}`}>
      <h2>Quem vai tirar o papelzinho?</h2>
      <form className={sorteioStyles.form} onSubmit={sortear}>
        <select 
          required
          name="participanteDaVez"
          id="participanteDaVez"
          placeholder="Selecione o seu nome"
          value={participanteDaVez}
          onChange={evento=> setParticipanteDaVez(evento.target.value)}
        >
          {participantes.map(
            participante=>
              <option key={participante}>{participante}</option>
            )
          }
        </select>
        <button className={sorteioStyles.botaoSortear}>Sortear</button>
      </form>
      {  amigoSecreto && 
          <p 
            className={sorteioStyles.resultado} 
            role={'alert'}
          >
            {amigoSecreto}
          </p>
       }
      <footer className={sorteioStyles.sorteio}>
        <img 
          src={aviao}
          className={sorteioStyles.sorteio} 
          alt="Um desenho de um avião de papel" 
        />
      </footer>
    </section>
  )
}