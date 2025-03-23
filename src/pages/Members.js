import React, { useEffect } from 'react';

const membersData = {
  phd: [
    { name: '陳郁涵', year: '112碩', img: 'assets/members/112_P78101035.jpg' },
    { name: '張志嘉', year: '114碩', img: 'assets/members/default.jpg' }
  ],
  master: [
    { name: '林紹謙', year: '112碩', img: 'assets/members/default.jpg' },
    { name: '張雅雯', year: '114碩', img: 'assets/members/114_P76121055.jpg' },
    { name: '周智涵', year: '114碩', img: 'assets/members/114_P76121241.jpg' },
    { name: '常博愛', year: '114碩', img: 'assets/members/114_P76123049.jpg' },
    { name: '洪至謙', year: '114碩', img: 'assets/members/114_VX6122069.jpg' },
    { name: '鄭以新', year: '114碩', img: 'assets/members/114_P76121283.jpg' },
    { name: '陳英轍', year: '114碩', img: 'assets/members/114_Q56121036.jpg' },
    { name: '何瀚宇', year: '114碩', img: 'assets/members/114_NE6127014.jpg' },
    { name: '呂文翔', year: '115碩', img: 'assets/members/115_Q56131015.jpg' },
    { name: '陳珮婕', year: '115碩', img: 'assets/members/115_P76134414.jpg' },
    { name: '黃詠筑', year: '115碩', img: 'assets/members/115_VX6132056.jpg' },
    { name: '巫冠君', year: '115碩', img: 'assets/members/115_NE6131063.jpg' },
    { name: '劉威佑', year: '115碩', img: 'assets/members/115_P76134024.jpg' },
    { name: '黃育笙', year: '115碩', img: 'assets/members/115_P76134553.jpg' },
    { name: '鄧蓉', year: '115碩', img: 'assets/members/115_P76131521.jpg' },
    { name: '鮑彥志', year: '115碩', img: 'assets/members/115_P76135012.jpg' }
  ]
};

const MemberCard = ({ name, year, img }) => (
  <div className="member-card">
    <img src={img} alt={name} />
    <div className="info">
      <strong>{name}</strong>
      <p>👤 {year}</p>
    </div>
  </div>
);

const Members = () => {
  useEffect(() => {
    document.title = 'Members - INHPC';
  }, []);

  return (
    <div className="members-page">
      <h1>實驗室成員</h1>
      <p>實驗室位置: 資訊系館新大樓8F 65803</p>

      <h2>博士班成員</h2>
      <div className="card-list">
        {membersData.phd.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </div>

      <h2>碩士班成員</h2>
      <div className="card-list">
        {membersData.master.map((member, index) => (
          <MemberCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
};

export default Members;
