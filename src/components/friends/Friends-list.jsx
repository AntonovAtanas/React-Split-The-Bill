import friendsDb from '../../assets/db';

import Friend from './Friend';

export default function FriendsList () {

    return (
        <div className='sidebar'>
            <ul>
            {friendsDb.map(fr => <Friend id={fr.id} imageUrl={fr.image} name={fr.name} balance={fr.balance} key={fr.id}/>)}
            </ul>
        </div>
    )
}