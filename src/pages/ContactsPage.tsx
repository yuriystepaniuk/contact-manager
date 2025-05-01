import { useState } from "react";
import { Container } from "@mui/material";
import ContactList from "../components/ContactList/ContactList";

const ContactsPage = () => {
  const [search, setSearch] = useState("");
  console.log(import.meta.env, "VITE_SERVER_URL");

  return (
    <Container>
      <ContactList search={search} />
    </Container>
  );
};

export default ContactsPage;
