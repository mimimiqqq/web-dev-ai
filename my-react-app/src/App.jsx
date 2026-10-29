// src/App.jsx
import { useState } from "react"; //1. 실시간 입력값을 기억하기 위해 useState 를 가져옵니다
import Card from "./Card";

function App() {
  //1. 기존의 고정 데이터 목록을 useState 안에 넣어서 '언제든 변할수 있는 상태'로 만든다

  const [fruitList, setFruitList] = useState([
    {
      id: 1,
      title: "🍎 사과",
      content: "의사를 멀리하게 해주는 달콤한 과일입니다.",
    }, // 💡 여기 전부 콜론(:)과 끝에 쉼표(,)가 들어갑니다!
    {
      id: 2,
      title: "🍌 바나나",
      content: "운동 전후에 먹기 좋은 에너지 가득한 과일입니다.",
    },
    {
      id: 3,
      title: "🍇 포도",
      content: "새콤달콤하고 보라색 빛깔이 예쁜 과일입니다.",
    },
    {
      id: 4,
      title: "🍉 수박",
      content: "여름철 갈증을 시원하게 날려주는 과일입니다.",
    },
    {
      id: 5,
      title: "🍓 딸기",
      content: "비타민C가 풍부하고 상큼한 겨울 과일입니다.",
    },
  ]);

  //2. 검색을 위한 글자 저장 공간(기존기능유지)
  const [searchTerm, setSearchTerm] = useState("");

  //3. 새로운 카드를 추가 할때 입력창의 글자들을 기억할 공간 2개
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  //4. [추가]버튼을 누르면 실행될 함수
  const handleAddFruit = () => {
    //빈칸이 있으면 추가하지 않고 경고창을 띄웁니다.
    if (newTitle === "" || newContent === "") {
      alert("과일 이름과 내용을 모두 입력해 주세요!");
      return;
    }

    //새로 만들 과일 객체 생성
    const newFruit = {
      id: Date.now(), //현재 시간을 숫자로 바꿔서 겹치지 않는 고유 ID를 만듭니다.
      title: newTitle,
      content: newContent,
    };

    //리액트에서 배열을 늘리 때는 원래 배열을 복사항뒤 뒤에 새항목을 붙여준다
    setFruitList([...fruitList, newFruit]);

    //등록이 끝났으니 입력창을 깨끗하게 비워준다.
    setNewTitle("");
    setNewContent("");
  };
  //검색어 필터링 기능(기존기능유지)
  const filteredFruits = fruitList.filter((fruit) => {
    return fruit.title.includes(searchTerm);
  });

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🧱 나의 리액트 무한 확장 조립소</h1>
      {/* ---[A영억] 새로운 과일 추가하는 입력창 박스 --- */}
      <div style={{
        backgroundColor:'#f1f3f5',
         padding: "20px",
      
          borderRadius: "12px",
          maxWidth: "320px",
          margin: "0auto 30px auto",
          border: "1px solid #e9ecef",

      }}>
        <h3 style={{marginTop:0}}>➕ 새 과일 추가 하기</h3>
        <input type="text" 
        placeholder="예: 🍒 체리"
        value={newTitle}
        onChange={(e)=> setNewTitle(e.target.value)}
        style={{width:'90%', padding:8px, marginBottom:'10px', borderRadius:'4px', border:'1px solid #ccc' />}}

        />


      </div>




      <p>원하는과일을 검색해 보세요!</p>

      {/*4. 글자를 입력 할수 있는 검색창(Input)을 만듭니다.*/}

      <input
        type="text"
        placeholder="과일 이름을 입력하세요(예:사과)"
        value={searchTerm} //검색창의 글자를 searchTerm 변수와 연결합니다.
        onChange={(e) => setSrarchTerm(e.target.value)} //글자를 입력할때마다 searcTerm 을 실시간으로 업데이트 합니다
        style={{

        }}
      />
      {/*
  5. 원래 fruitList를 돌리던 것 대신,
  방금 필터링한 filteredFruits 목록을 가지고 카드를 그립니다!*/}

      {filteredFruits.map((fruit) => {
        return (
          <Card key={fruit.id} title={fruit.title} content={fruit.content} />
        );
      })}
      {/*6. 만약 검색 결과가 하나도 없다면 안내 문구를 보여줍니다.*/}
      {filteredFruits.length === 0 && (
        <p style={{ color: "#888", marginTop: "20px" }}>
          검색결과가 없습니다😭
        </p>
      )}
    </div>
  );
}

export default App;
