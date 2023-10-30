import './App.css'

import AddFriend from './components/friends/Add-Friend'
import FriendsList from './components/friends/Friends-list'
import Bill from './components/bill/Bill'

function App() {

  return (
    <div className='app'>
      <FriendsList />
      <AddFriend />
      <Bill />
    </div>
  )
}

export default App
