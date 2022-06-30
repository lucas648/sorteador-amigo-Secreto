import Formulario from "../../components/formulario";
import ListaParticipantes from "../../components/lista";
import Rodape from "../../components/rodape";

import configStyles from './Configuracao.module.scss'

export default function Configuracao(){
  return(
    <div className={configStyles.container}>
      <Formulario/>
      <ListaParticipantes/>
      <Rodape/>
    </div>
  )
}