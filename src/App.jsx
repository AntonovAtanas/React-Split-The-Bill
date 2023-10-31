import "./App.css";
import { useState } from "react";

import AddFriend from "./components/friends/Add-Friend";
import FriendsList from "./components/friends/Friends-list";
import Bill from "./components/bill/Bill";

function App() {
    const [allFriends, setAllFriends] = useState([]);

    // add friend form
    const [friendName, setFriendName] = useState('');
    const [friendImage, setFriendImage] = useState('');

    function onAddFriend (e) {
        e.preventDefault();
        if (!friendName || !friendImage) return;

        setAllFriends((allFriends) => [...allFriends, {name: friendName, imageUrl: friendImage, balance: 0, id: Date.now()}]);

        setFriendName('');
        setFriendImage('');
    };

    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList allFriends={allFriends} />
                <AddFriend onAddFriend={onAddFriend} friendImage={friendImage} friendName={friendName} setFriendName={setFriendName} setFriendImage={setFriendImage} />
            </div>
            <Bill />
        </div>
    );
}

export default App;
