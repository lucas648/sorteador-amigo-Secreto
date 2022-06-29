import formStyles from './Formulario.module.scss';

export default function Formulario(){
  return(
    <form className={formStyles.form}>
      <p>Vamos Começar!!</p>
      <input 
        className={formStyles.form__input}
        type={'text'} 
        placeholder={'Insira os nomes dos participantes'} 
    />
      <button 
         className={formStyles.form__botao}
         disabled={true}
      >
        Adicionar
      </button>
    </form>
  )
}