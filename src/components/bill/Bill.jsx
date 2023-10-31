import { useState } from "react";
import Button from "../friends/Button";

export default function Bill({ friend, isSelected, setAllFriends }) {
    const [totalBill, setTotalBill] = useState("");
    const [yourPay, setYourPay] = useState(0);
    const [friendPay, setFriendPay] = useState(0);

    const [whoPays, setWhoPays] = useState("you");

    function calcBill(paidMoney) {
        // setAllFriends((allFriends) => {
        //     return allFriends.map((currentFriend) => {
        //         if (whoPays === "friend") {
        //             if (currentFriend.id === friend.id) {
        //                 return {
        //                     ...currentFriend,
        //                     balance: (currentFriend.balance -=
        //                         Number(totalBill) - Number(paidMoney)),
        //                 };
        //             }
        //             return currentFriend;
        //         } else {
        //             if (currentFriend.id === friend.id) {
        //                 return {
        //                     ...currentFriend,
        //                     balance: (currentFriend.balance +=
        //                         Number(totalBill) - Number(paidMoney)),
        //                 };
        //             }
        //         }
        //     });
        // });

        if (whoPays == 'you') {
            setFriendPay(() => Number(totalBill) - Number(paidMoney));
            setYourPay(() => Number(paidMoney));
        } else {
            setYourPay(() => Number(totalBill) - Number(paidMoney));
            setFriendPay(() => Number(paidMoney));
        }
    }

    return (
        <>
            {isSelected && (
                <div>
                    <form action="" className="form-split-bill">
                        <h2>SPLIT A BILL WITH {friend.name}</h2>
                        <label htmlFor="">💰 Bill value</label>
                        <input
                            type="text"
                            value={totalBill}
                            onChange={(e) => setTotalBill(() => e.target.value)}
                        />
                        <label htmlFor="">👧 Your expense</label>
                        <input
                            type="text"
                            disabled={whoPays === "friend" ? true : false}
                            onChange={(e) => calcBill(e.target.value)}
                            value={yourPay}
                        />
                        <label htmlFor="">👨‍👩‍👦 {friend.name}'s expense</label>
                        <input
                            type="text"
                            disabled={whoPays === "you" ? true : false}
                            onChange={(e) => calcBill(e.target.value)}
                            value={friendPay}
                        />
                        <label htmlFor="">🤑 Who is paying the bill?</label>
                        <select
                            value={whoPays}
                            onChange={(e) => setWhoPays(() => e.target.value)}
                        >
                            <option value="you">You</option>
                            <option value="friend">{friend.name}</option>
                        </select>
                        <Button>Split bill</Button>
                    </form>
                </div>
            )}
        </>
    );
}
