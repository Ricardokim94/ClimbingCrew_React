import React from 'react';
import Card from './Card';
import axios from 'axios';

function MainPage({ memData }) {
    return (
      <>
        <div className='main-bg'></div>{/* 베너 */}
        <div className="container">{/* 가운데 사진3개 */}
          <div className="row">
            {
              memData.map((a, i) => {
                return (
                  <Card memData={memData[i]} i={i} key={i}></Card>
                )
              })
            }
          </div>
        </div>
        <button onClick={()=>{ //ajax 서버에 요청
          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((data)=>{
            console.log("data",data.data)
          })
          .catch(()=>{
            console.log('실패했습니다.')
          })
        }}>추가 맴버 더보기</button>
      </>
    );
  }

export default MainPage;