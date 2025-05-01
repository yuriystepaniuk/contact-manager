import { useState } from "react";
import { Container, Stack } from "@mui/material";
import ContactList from "../components/ContactList/ContactList";
import SearchField from "../components/SearchField/SearchField";
import { useGetUsersQuery } from "../redux/api/userApi";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";

const ContactsPage = () => {
  const [search, setSearch] = useState("");
  const { data: users = [], isLoading, isError } = useGetUsersQuery();

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage message="Error loading contacts" />;

  return (
    <Container>
      <Stack>
        <SearchField value={search} onChange={setSearch} />
        <ContactList search={search} users={users} loading={isLoading} />
      </Stack>
    </Container>
  );
};

export default ContactsPage;
