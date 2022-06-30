import { useRef, useState } from 'react';
import { useAdicionarParticipante } from '../../state/hooks/useAdicionarParticipante';
import { useMensagemDeErro } from '../../state/hooks/useMensagemDeErro';
import formStyles from './Formulario.module.scss';

export default function Formulario(){
  const [nome, setNome] = useState('');

  const inputRef = useRef<HTMLInputElement>(null);

  const adicionarNaLista = useAdicionarParticipante();

  const mensagemdeEroo = useMensagemDeErro();

  const adicionarParticipante = (event: React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    adicionarNaLista(nome)
    setNome('')
    inputRef.current?.focus();
  }

  return(
    <form className={formStyles.form} onSubmit={adicionarParticipante}>
      <h2>Vamos Começar!!</h2>
      <input 
        ref={inputRef}
        value={nome}
        onChange={(event)=>{
          setNome(event.target.value)
        }}
        className={formStyles.form__input}
        type={'text'} 
        placeholder={'Insira os nomes dos participantes'} 
    />
      <button 
         className={formStyles.form__botao}
         disabled={!nome}
      >
        Adicionar
      </button>
      {mensagemdeEroo && <p role={'alert'}>{mensagemdeEroo}</p>}
    </form>
  );
}