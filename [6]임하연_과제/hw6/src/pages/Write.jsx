import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
import * as W from "../styles/styledWrite";

const Write = () => {
  const navigate = useNavigate();
  
  const[title,setTitle] = useState("");
  const [content,setContent] = useState("");

  const handleWrite = () => {
    console.log("제목:" , title);
    console.log("내용:" , content);

  }
  const goBack = () => {
    navigate(`/`);
  };

  return (
    <W.Container>
    <W.Box>
      <W.BackBtn onClick={goBack}>
        <img
          src={`${process.env.PUBLIC_URL}/images/backBtn.svg`}
          alt="back"
          width="30px"
        />    
      </W.BackBtn>
      <W.Content>
        <W.Title placeholder="제목을 입력하세요"
        value = {title}
        onChange={(e)=>{setTitle(e.target.value)}}/>
        <W.ContentBox placeholder="내용 입력"
        value = {content}
        onChange={(e)=>{setContent(e.target.value)}} />
        <W.WriteBtn onClick = {handleWrite}>작성하기</W.WriteBtn>
      </W.Content>
    </W.Box>
  </W.Container>
  );
};



export default Write;
