export default function Button({children, friendId, findFriend, setIsSelected, isSelected}) {

    function selectFriend() {
        findFriend(friendId);
        setIsSelected((selected) => !selected)
    }

    if (friendId) {
        return <button className="button" onClick={() => selectFriend()}>{!isSelected ? 'Select' : 'Close'}</button>
    }

    return (
        <button className="button">{children}</button>
    );
}