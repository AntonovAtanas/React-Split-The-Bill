import Button from "./Button";

export default function Friend({ id, imageUrl, name, balance, findFriend }) {
    let balanceMessage =
        balance === 0 ? (
            <p>You and {name} are even</p>
        ) : balance < 0 ? (
            <p className="red">
                You owe {name} {balance}€
            </p>
        ) : (
            <p className="green">
                {name} owes you {balance}€
            </p>
        );

    return (
        <li key={id}>
            <img src={`${imageUrl}`} alt="name"></img>
            <h3>{name}</h3>
            {balanceMessage}
            <Button friendId={id} findFriend={findFriend}>Select</Button>
        </li>
    );
}
