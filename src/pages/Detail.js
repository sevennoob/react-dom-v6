import React from "react";
import { useLocation } from "react-router-dom";
// import { useParams } from "react-router-dom";

export default function Detail() {
  // const { id, title, content } = useParams();
  const {state: {id, title, content}} = useLocation();
  return (
    <ul>
      <li>id: {id}</li>
      <li>title: {title}</li>
      <li>content: {content}</li>
    </ul>
  );
}
