import { Card as CardAntd } from "antd";
import React, { ReactElement } from "react";

type CardProps = {
  children: ReactElement;
  title: string;
};

const Card = ({ children, title }: CardProps) => {
  return (
    <CardAntd title={title} bodyStyle={{ padding: 0 }} style={{ width: 300 }}>
      {children}
    </CardAntd>
  );
};

export default Card;
