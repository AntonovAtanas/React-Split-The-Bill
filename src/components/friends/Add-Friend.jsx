import Button from "./Button";

export default function AddFriend({onAddFriend, setFriendImage, setFriendName, friendName, friendImage, isOpen, setIsOpen}) {

    return (
        <div className="add-form-wrapper">
            { isOpen &&
                <form className="form-add-friend" onSubmit={onAddFriend}>
                    <label htmlFor=""> 👩🏻‍🤝‍🧑🏼Friend name</label>
                    <input value={friendName} type="text" onChange={(e) => setFriendName(() => e.target.value)}/>
                    <label htmlFor="">📷 Image URL</label>
                    <input value={friendImage} type="text" onChange={(e) => setFriendImage(() => e.target.value)}/>
                    <Button>Add friend</Button>
                </form>
            }
            <button className="button form-toggle" onClick={() => setIsOpen((isOpen) => !isOpen)}>{isOpen ? 'Close' : 'Add friend'}</button>
        </div>
    );
}
