import React from 'react';

const ListBabyNames = ({babyName}) => {
   
    return (
        <ul>
            <li key={babyName.id} className='babyName'>{ babyName.name }</li>
        </ul>
    )
}

export default ListBabyNames;