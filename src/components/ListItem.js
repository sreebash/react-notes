import React from 'react';

const ListItem = ({note}) => {
    return (
        <div>
            <h3 key={note.index}>{note.body}</h3>
        </div>
    );
};

export default ListItem;