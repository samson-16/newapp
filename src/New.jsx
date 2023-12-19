import React from 'react';

const GroupMembersList = () => {

  const groupMembers = [
    'Samson Demessie',
    'Samuel Girma',
    'Natnael Shemels',
    'Netsanet Tesfaye',
    'Niyat Hannibal',
    'Rahel Abera',
    'Ruth Amenu',
    'Samrawit Gebremaryamn',
    'wondifraw Terefe',
    'Yeasbsera Sisay',
  ];

  return (
    <div>
      <h2>Group Members</h2>
      <ul className='container '>
        
        {groupMembers.map((member, index) => (
          <li key={index} className='list'>{member}</li>
        ))}
      </ul>
    </div>
  );
};

export default GroupMembersList;
