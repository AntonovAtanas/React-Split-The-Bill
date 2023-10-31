import { useState } from "react";
import Button from "./Button";

export default function AddFriend() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="add-form-wrapper">
            { isOpen &&
                <form action="" className="form-add-friend" onSubmit={() => console.log('dada')}>
                    <label htmlFor=""> 👩🏻‍🤝‍🧑🏼Friend name</label>
                    <input type="text" />
                    <label htmlFor="">📷 Image URL</label>
                    <input type="text" />
                    <Button>Add friend</Button>
                </form>
            }
            <button className="button form-toggle" onClick={() => setIsOpen((isOpen) => !isOpen)}>{isOpen ? 'Close' : 'Add friend'}</button>
        </div>
    );
}
