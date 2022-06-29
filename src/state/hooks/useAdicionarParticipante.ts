import { useRecoilValue, useSetRecoilState } from "recoil"
import { erroState, listaParticipantes } from "../atom"

export const useAdicionarParticipante = ()=>{
  const setLista = useSetRecoilState(listaParticipantes);
  const lista = useRecoilValue(listaParticipantes);
  const setErro = useSetRecoilState(erroState)
  return (nomParticipante: string) =>{
    if(lista.includes(nomParticipante)){
      setErro('Nomes Duplicados não são permitidos!');
      setTimeout(()=>{
        setErro('');
      }, 5000)
      return
    }
    return setLista(listaAtual=> [...listaAtual, nomParticipante])
  }
}