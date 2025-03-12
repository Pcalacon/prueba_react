import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

function Card(props: CardProps) {
  const { children } = props;
  return (
    <div
      className="Card"
      style={{
        width: "350px",
      }}
    >
      <div className="card-body">{children}</div>
    </div>
  );
}

interface CardBodyProps {
  title: string;
  text?: string;
}

export function Cardbody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}

export default Card;
