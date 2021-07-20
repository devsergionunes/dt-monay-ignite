import { Contenteiner ,Content} from "./HeaderStyle"
import logoImg from '../../assests/logo.svg'

interface HeaderProps  {
  OnOpenNewTrasactionModal: () => void;
}
export function Header({OnOpenNewTrasactionModal}:HeaderProps) {
  return (
    <Contenteiner>
      <Content>
        <img src={logoImg} alt="dt monay" />
        <button type='button' onClick={OnOpenNewTrasactionModal}>
          Nova transaçao
        </button>
      </Content>
    </Contenteiner>
  )
}