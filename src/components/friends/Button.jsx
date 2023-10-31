export default function Button({children, friendId, findFriend}) {

    if (friendId) {
        return <button className="button" onClick={() => findFriend(friendId)}>{children}</button>
    }

    return (
        <button className="button">{children}</button>
    );
}