//src/Card.jsx

import { useState } from "react"; // 1. 리액트에게 변하는 값을 쓰겠다고 알립니다!

function Card({ title, content }) {
  // 2. 좋아요 숫자를 저장할 공간 (like)과 이 숫자를 바꿀 전용 리모컨(setLike)을 만듭니다.
  // 기본값은 0으로 시작합니다.

  const [like, setLike] = useState(0);
  //3. 카드를 클릭했을때 실행할 함수를 만듭니다.
  const handleClick = () => {
    setLike(like + 1); //현재 좋아요 숫자에 1을 더해줍니다!
  };

  return (
    <div
      onClick={handleClick} //4. 이카드를 클릭하면 handleClick 함수가 실행됩니다.
      style={{
        border: "1px solid#ddd",
        borderRadius: "12px",
        padding: "20px",
        margin: "20px auto",
        maxWidth: "300px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
        backgroundColor: "#f9f9f9",
        cursor: "pointer", //마우스를 올리면 손가락 모양으로 변하게 마감 처리!
        transition: "transfrom 0.2s",
      }}
    >
      <h3>{title}</h3>
      <p>{content}</p>

      {/* 5. 화면에 실시간으로 변하는 좋아요 숫자를 보여줍니다.*/}
      <div style={{ fontSize: "18px", marginTop: "15px" }}>❤️{like}</div>
    </div>
  );
}

export default Card; // 다른 파일에서 나를 불러다 쓸수 있게 내보냅니다<div className=""></div>
