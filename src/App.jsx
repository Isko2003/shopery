import './App.css'
import Routing from './Routing/Routing'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import supabase from '../supabaseClient';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient()
function App() {
  console.log(supabase)
  return (
    <QueryClientProvider client={queryClient}>
      <Routing />
    </QueryClientProvider>
  )
}

export default App
