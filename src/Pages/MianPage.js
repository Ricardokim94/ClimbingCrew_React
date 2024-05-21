import React from 'react';
import Card from './Card';

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
      </>
    );
  }

export default MainPage;