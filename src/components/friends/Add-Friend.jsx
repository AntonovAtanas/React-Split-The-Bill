import Button from "./Button"

export default function AddFriend () {

    return (
        <div className="add-form-wrapper">
            <form action="" className="form-add-friend">
                <label htmlFor="">👩🏻‍🤝‍🧑🏼Friend name</label>
                <input type="text" />
                <label htmlFor="">📷 Image URL</label>
                <input type="text" />
                <Button>Add friend</Button>
            </form>
                <button className="button form-toggle">Close</button>
        </div>
    )
}