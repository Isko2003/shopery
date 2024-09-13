import './App.css'
import Routing from './Routing/Routing'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import supabase from '../supabaseClient';

function App() {
  console.log(supabase)
  return (
      <Routing />
  )
}

export default App
