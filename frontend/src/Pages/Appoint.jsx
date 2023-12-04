import { Container } from "@chakra-ui/react";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Appoint() {
  const [value, onChange] = useState(new Date());
  return (
    <Container maxW="container.sm" mt={30}>
      <Calendar onChange={onChange} value={value} />
    </Container>
  );
}

export default Appoint;
