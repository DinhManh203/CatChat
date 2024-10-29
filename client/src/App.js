import { Outlet } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <>
      <Toaster />
      <main>
        <Outlet />
      </main>
    </>
  )
}