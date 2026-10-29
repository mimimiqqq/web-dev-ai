
import axios from "axios"
import { useState } from "react"

const AxiosPost = () => {
  const [title, setTitle] = useState("");

  //입력값 변경시 상태 업데이트
  const handleInputChange = (e) => {
    setTitle(e.target.value);
  }

  //폼 전송시 핸들러(함수)
  const handleSubmit = (e) => {
    e.preventDefault();  //새로고침 방지

    //유효성 검사
    if (!title) { //제목에 텍스트가 없으면
      alert("할 일을 입력하세요");
      return;
    }

    //할 일 생성
    axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: title,  //제목
      completed: false  //완료상태
    })
      .then((res) => {
        console.log("추가된 데이터:", res.data);
        alert("추가 완료!!");
        setTitle("");  //입력 필드 초기화
      })
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <h2>할 일 추가</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="할 일 입력"
          value={title}
          onChange={handleInputChange}
        />
        <button type="submit">추가</button>
      </form>
      {/* <p>입력된 할일: {title}</p> */}
    </div>
  )
}

export default AxiosPost