import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { RecoilRoot } from "recoil";
import Formulario from ".";

describe('descrevendo comportamento do Formulário', ()=>{
  test('qnado input está vazio, novos participantes não podem ser adicionados', ()=>{
    render(
      <RecoilRoot>
        <Formulario/>
      </RecoilRoot>
    );
              
      
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
      
    const botao = screen.getByRole('button');
      
    expect(input).toBeInTheDocument();
      
    expect(botao).toBeDisabled();
  });
      
  test('adicionar um participante caso exista um nome preenchido', ()=>{
    render(
      <RecoilRoot>
        <Formulario/>
      </RecoilRoot>
    );
      
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
        
    const botao = screen.getByRole('button');
      
    fireEvent.change(input,{
      target: {
        value: 'Alfredo'
      }
    });
      
    fireEvent.click(botao);
      
    expect(input).toHaveFocus();
      
    expect(input).toHaveValue('');

  });
      
  test('nomes duplicados não podem ser adicionados na lista', ()=>{
    render(
      <RecoilRoot>
        <Formulario/>
      </RecoilRoot>
    );
          
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
            
    const botao = screen.getByRole('button');
          
    fireEvent.change(input,{
      target: {
        value: 'Alfredo'
      }
    });
          
    fireEvent.click(botao);
      
    fireEvent.change(input,{
      target: {
        value: 'Alfredo'
      }
    });
          
    fireEvent.click(botao);
      
    const mensagemDeErro = screen.getByRole('alert');
      
    expect(mensagemDeErro.textContent).toBe('Nomes Duplicados não são permitidos!');

  });
      
      
  test('mensagem de erro sumir deppois de 3 segundos',()=>{
    jest.useFakeTimers();
    render(
      <RecoilRoot>
        <Formulario/>
      </RecoilRoot>
    );
          
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');
            
    const botao = screen.getByRole('button');
          
    fireEvent.change(input,{
      target: {
        value: 'Alfredo'
      }
    });
          
    fireEvent.click(botao);
      
    fireEvent.change(input,{
      target: {
        value: 'Alfredo'
      }
    });
          
    fireEvent.click(botao);
      
    let mensagemDeErro = screen.queryByRole('alert');
      
    expect(mensagemDeErro).toBeInTheDocument();
      
    act(()=>{
      jest.runAllTimers();
    });
      
    mensagemDeErro = screen.queryByRole('alert');
    expect(mensagemDeErro).toBeNull();
  })
})