import React from "react";
import { MdAdd } from "react-icons/md";

import { Container } from "./styles";
import Card from "../Card";

export default function List({data, index: listIndex}) {
  const { title, cards, done, creatable } = data;

  return (
    <Container done={done}>
      <header>
        <h2>{title}</h2>
        {creatable && (
          <button type="button">
            <MdAdd size={24} color="#ffffff" />
          </button>
        )}
      </header>
      <ul>
        {
          cards.map((card, index) => (
            <li key={card.id}>
              <Card data={card} index={index} listIndex={listIndex} />
            </li>
          ))
        }
      </ul>
    </Container>
  )
}
