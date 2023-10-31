import Friend from "./Friend";

export default function FriendsList({allFriends, findFriend, setIsSelected, isSelected}) {
    return (
        <ul>
            {allFriends.map((fr) => (
                <Friend
                    id={fr.id}
                    imageUrl={fr.imageUrl}
                    name={fr.name}
                    balance={fr.balance}
                    key={fr.id}
                    findFriend={findFriend}
                    isSelected={isSelected} 
                    setIsSelected={setIsSelected}
                />
            ))}
        </ul>
    );
}
