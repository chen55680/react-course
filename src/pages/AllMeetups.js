import { useState, useEffect } from 'react';

import MeetupList from '../components/meetups/MeetupList'

function AllMeetupsPage() {
const [isLoading, setIsLoading] = useState(true);  //設定起始值為true,前者變數為當前設定狀態，後者變數為設定狀態
const [loadedMeetups, setLoadedMeetups] = useState([]);

//若無此useEffect則會無限發出請求無限修改useState，因為當useState狀態改變，AllMeetupsPage就會再跑一次（此為react規則）
useEffect(() => {
  setIsLoading(true);
  fetch('https://react-getting-started-ee27f-default-rtdb.firebaseio.com/meetups.json')
  .then(response => {
    return response.json();  //here we have to wait promise,too
  }).then(data => {

    const meetups = [];
    
    for (const key in data) {
      const meetup = {
        id: key,
        ...data[key]  //...ＪＳ方法用以複製其中所有key-value
      }
      meetups.push(meetup);
    }

    setIsLoading(false);
    setLoadedMeetups(meetups)
  });
  
}, []); 
//useEffect有兩個參數，第一個是function，第二個是數組
//第二個數組內，可以填入多個變數為依賴項，他會偵測其若改變則會重新執行上述方法，若輸入空陣列則表示載入時執行一次即可


  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
  return (
    <section> 
      <h1>All Meetups</h1>
        <MeetupList meetups={loadedMeetups} />
    </section>
  )

}

export default AllMeetupsPage;