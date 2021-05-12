import React from 'react';
import AddTopics from '../AddTopics/AddTopics';
import TopicList from '../TopicList/TopicList';

const Admin = () => {
    return (
        <div>
             <AddTopics />
            <TopicList/>
        </div>
    );
};

export default Admin;