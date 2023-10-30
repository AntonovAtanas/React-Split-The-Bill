
export default function AddFriend () {

    return (
        <div className="add-form-wrapper">
            <form action="" className="form-add-friend">
                <label htmlFor="">👩🏻‍🤝‍🧑🏼Friend name</label>
                <input type="text" />
                <label htmlFor="">📷 Image URL</label>
                <input type="text" />
                <button className="button">Add</button>
            </form>
                <button className="button form-toggle">Close</button>
        </div>
    )
}