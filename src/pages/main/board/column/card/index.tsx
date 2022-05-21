import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #fff;
  color: black;
  font-weight: lighter;
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
`;
const Title = styled.div``;
interface Props {
  card: {
    id: string;
    title: string;
    description: string;
  };
  index: number;
}
export default function Card(props: Props) {
  const { card, index } = props;
  return (
    <Container>
      <Title>{card.title}</Title>
    </Container>
  );
}
