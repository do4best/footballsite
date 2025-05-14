import MainFootball from "./components/footaball/mainFootball"
import OurProspect from '../src/components/footaball/ourProspect.jsx'
import OurTeam from '../src/components/footaball/outTeam.jsx'
import OurLocation from '../src/components/footaball/ourLocation.jsx'
import { HashRouter, Routes, Route,RouterProvider } from 'react-router';
function App() {
  return (
    <>
         <Routes>
    <Route path="/" element={<MainFootball/>} />
    <Route path="/ourprospect" element={<OurProspect/>} />
    <Route path="/ourteam" element={<OurTeam/>} />
       <Route path="/ourlocation" element={<OurLocation/>} />

  </Routes>
    </>
  )
}

export default App
