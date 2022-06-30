import { render, screen } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import ListaParticipantes from "."
import { useListaParticipantes } from "../../state/hooks/useListaParticipantes"

jest.mock('../../state/hooks/useListaParticipantes', ()=>{
  return {
    useListaParticipantes : jest.fn()
  }
})

describe('testando a lista de participantes', ()=>{
  beforeEach(()=>{
    (useListaParticipantes as jest.Mock).mockReturnValue([])
  })
  test('uma lista vazia de participantes deve ser renderizada',()=>{
    render(
      <RecoilRoot>
        <ListaParticipantes/>
      </RecoilRoot>
    )

    const items = screen.queryAllByRole('listitem');

    expect(items).toHaveLength(0)
  });
})
describe('testando a lista preenchida de participantes', ()=>{
  const participantes = ['Ana', 'Catarina'];
  beforeEach(()=>{
    (useListaParticipantes as jest.Mock).mockReturnValue(participantes)
  })
  test('uma lista preenchida de participantes deve ser renderizada',()=>{
    render(
      <RecoilRoot>
        <ListaParticipantes/>
      </RecoilRoot>
    )
    
        
    const items = screen.queryAllByRole('listitem');
    
    expect(items).toHaveLength(participantes.length)
  })
})