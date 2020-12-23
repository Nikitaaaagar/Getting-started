import React from 'react';
import '../App.scss';
import Card from './card';
// GitHub usernames: gaearon, sophiebits, sebmarkbage, bvaughn

const CardList = (props) => (
    <div>
        {props.profiles.map((profile) => (
            <Card key={profile.id} {...profile} />
        ))}
    </div>
);
export default CardList;
