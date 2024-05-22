import  { Footer, Nav } from "./components";
import { useLocation } from "react-router-dom";
import CustomRouter from "./Router/router"

export default function App() {
  const location = useLocation();
  return (
    <main className="overflow-hidden">
      <Nav />
      <div>
        <CustomRouter />
      </div>
      
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer />
      </section>
    </main>
  )
}