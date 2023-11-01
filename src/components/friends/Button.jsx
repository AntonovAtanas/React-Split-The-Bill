export default function Button({
    children,
    friendId,
    findFriend,
    setIsSelected
}) {
    function selectFriend() {
        findFriend(friendId);

        setIsSelected(() => true);
    }

    if (friendId) {
        return (
            <button
                className="button"
                onClick={() => selectFriend()}
            >
                Select
            </button>
        );
    }

    return <button className="button">{children}</button>;
}
