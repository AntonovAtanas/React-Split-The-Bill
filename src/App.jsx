import "./App.css";
import { useState } from "react";

import AddFriend from "./components/friends/Add-Friend";
import FriendsList from "./components/friends/Friends-list";
import Bill from "./components/bill/Bill";

function App() {
    const [allFriends, setAllFriends] = useState([]);
    const [friend, setFriend] = useState({});

    // add friend form
    const [isOpen, setIsOpen] = useState(false);
    const [friendName, setFriendName] = useState("");
    const [friendImage, setFriendImage] = useState("");

    // bill form
    const [isSelected, setIsSelected] = useState(false);

    function onAddFriend(e) {
        e.preventDefault();
        if (!friendName || !friendImage) return;

        setAllFriends((allFriends) => [
            ...allFriends,
            {
                name: friendName,
                imageUrl: friendImage,
                balance: 0,
                id: Date.now(),
            },
        ]);

        setFriendName("");
        setFriendImage("");

        setIsOpen((isOpen) => !isOpen);
    }

    function findFriend(id) {
        const foundFriend = allFriends.find((friend) => friend.id === id);

        setFriend(() => foundFriend);
    }

    return (
        <div className="app">
            <div className="sidebar">
                <FriendsList
                    allFriends={allFriends}
                    findFriend={findFriend}
                    isSelected={isSelected}
                    setIsSelected={setIsSelected}
                />
                <AddFriend
                    onAddFriend={onAddFriend}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    friendImage={friendImage}
                    friendName={friendName}
                    setFriendName={setFriendName}
                    setFriendImage={setFriendImage}
                />
            </div>
            <Bill friend={friend} isSelected={isSelected} />
        </div>
    );
}

export default App;
