import { Summery } from "../Summery/Summery";
import { TrasactionTable } from "../TrasactionTable/TrasactionTable";
import { Contenteiner } from "./DashbordStyle";


export function Dashbord() {
  return (
    <Contenteiner>
      <Summery />
      <TrasactionTable/>
    </Contenteiner>
  )
}