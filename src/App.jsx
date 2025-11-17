import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './components/Dashboard'
import Timer from './components/Timer'
import Notes from './components/Notes'
import Sidebar from './components/Sidebar'
import Guide from './components/Guide'
import Algorithms from './components/Algorithms'
import Settings from './components/Settings'
import ChatIA from './components/ChatIA'
import { auth } from './firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'

export default function App() {
  const [user, setUser] = useState(null)
  useEffect(() => { onAuthStateChanged(auth, (u) => setUser(u)) }, [])
  if (!user) return <Login />
  return (
    <BrowserRouter>
      <div className="layout">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/timer" element={<Timer />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/algorithms" element={<Algorithms />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
        <ChatIA />
      </div>
    </BrowserRouter>
  )
}