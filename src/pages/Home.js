import React, { useEffect } from 'react';

const Home = () => {
    useEffect(() => {
        document.title = 'INHPC Lab | Home';
        const favicon = document.querySelector("link[rel='icon']");
        if (favicon) {
          favicon.href = '/assets/img/logo.png';
        }
      }, []);
    const news = [
      {
        date: "2017-02-02",
        zh: "賀！葉泰麟學長 榮獲博士學位。",
        en: "Congratulation to Tai-Ling Ye! He received the PhD degree..."
      },
      {
        date: "2017-02-02",
        zh: "賀！魏嘉成學長 榮獲博士學位。",
        en: "Congratulation to Chia-Chen Wei! He received the PhD degree..."
      },
      // ...其他資料
    ];
  
    return (
      <div className="home">

    <div className="announcement"></div>
        <h1>實驗室公告</h1>
        {news.map((item, index) => (
          <div className="article" key={index}>
            <div className="candy-header">
              <span className="single">{item.date}</span>
            </div>
            <span className="content">
              {item.zh}<br />{item.en}
            </span>
          </div>
        ))}
      </div>
    );
  };
  
  export default Home;
  