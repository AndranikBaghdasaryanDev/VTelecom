import { Header } from "./components/Header";
import { Dashboard } from "./pages/dashboard";


export default function App(){
  return <div className="bg-[#2a3142]">
    <Header/>
    <Dashboard/>
  </div>
}