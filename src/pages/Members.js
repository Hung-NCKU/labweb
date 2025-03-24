import React, { useEffect } from 'react';

const membersData = {
  phd: [
    { name: '陳郁涵', year: '112碩', img: 'assets/img/1.webp' },
    { name: '張志嘉', year: '114碩', img: 'assets/img/2.webp' }
  ],
  master: [
    { name: '林紹謙', year: '112碩', img: 'assets/img/3.webp' },
    { name: '張雅雯', year: '114碩', img: 'assets/img/4.webp' },
    { name: '周智涵', year: '114碩', img: 'assets/img/5.webp' },
    { name: '常博愛', year: '114碩', img: 'assets/img/6.webp' },
    { name: '洪至謙', year: '114碩', img: 'assets/img/7.webp' },
    { name: '鄭以新', year: '114碩', img: 'assets/img/8.webp' },
    { name: '陳英轍', year: '114碩', img: 'assets/img/9.webp' },
    { name: '何瀚宇', year: '114碩', img: 'assets/img/10.webp' },
    { name: '呂文翔', year: '115碩', img: 'assets/img/11.webp' },
    { name: '陳珮婕', year: '115碩', img: 'assets/img/12.webp' },
    { name: '黃詠筑', year: '115碩', img: 'assets/img/13.webp' },
    { name: '巫冠君', year: '115碩', img: 'assets/img/14.webp' },
    { name: '劉威佑', year: '115碩', img: 'assets/img/15.webp' },
    { name: '黃育笙', year: '115碩', img: 'assets/img/16.webp' },
    { name: '鄧蓉', year: '115碩', img: 'assets/img/17.webp' },
    { name: '鮑彥志', year: '115碩', img: 'assets/img/18.webp' }
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
