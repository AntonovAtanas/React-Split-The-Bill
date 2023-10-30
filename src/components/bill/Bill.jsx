import Button from "../friends/Button"

export default function Bill () {

    return (
        <div>
            <form action="" className="form-split-bill">
                <h2>SPLIT A BILL WITH NAME</h2>
                <label htmlFor="">💰 Bill value</label>
                <input type="text" />
                <label htmlFor="">👧 Your expense</label>
                <input type="text" />
                <label htmlFor="">👨‍👩‍👦 Name's expense</label>
                <input type="text" disabled />
                <label htmlFor="">🤑 Who is paying the bill?</label>
                <select>
                    <option value="you">You</option>
                    <option value="name">Name</option>
                </select>
                <Button>Split bill</Button>
            </form>
        </div>
    )
}