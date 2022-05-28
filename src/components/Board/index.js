import React from 'react'

import { Container } from "./styles";
import Header from "../Header";
import List from "../List";

export default function Board() {
  return (
    <Container>
      <Header />
      <List />
    </Container>
  )
}
