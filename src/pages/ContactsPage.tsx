import { useState } from "react";
import { Container, Stack, Box } from "@mui/material";
import ContactList from "../components/ContactList/ContactList";
import SearchField from "../components/SearchField/SearchField";
import { useGetUsersQuery } from "../redux/api/userApi";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import SortBlock from "../components/SortBlock/SortBlock";

const ContactsPage = () => {
  const [search, setSearch] = useState("");
  const { data: users = [], isLoading, isError } = useGetUsersQuery();
  const [sort, setSort] = useState<"asc" | "desc">("asc");

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage message="Error loading contacts" />;

  return (
    <Container>
      <Stack>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ flex: 1, maxWidth: 500 }}>
            <SearchField value={search} onChange={setSearch} />
          </Box>
          <SortBlock sort={sort} onSortChange={setSort} />
        </Box>
        <ContactList search={search} users={users} sort={sort} />
      </Stack>
    </Container>
  );
};

export default ContactsPage;
