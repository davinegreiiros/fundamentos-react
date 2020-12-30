import { React } from "react";

export default function ComParematro(props) {
  const status = props.nota >= 7 ? "Aprovado" : "Reprovado";
  const notaInt = Math.ceil(props.nota);
  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>
        <strong>{props.aluno} </strong>
        tem nota
        <strong> {props.nota} </strong>e está
        <strong> {status} </strong>!
      </p>
    </div>
  );
}
