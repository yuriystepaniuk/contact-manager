import { useState } from "react";
import {
  Container,
  Stack,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";

import ContactList from "../components/ContactList/ContactList";
import SearchField from "../components/SearchField/SearchField";
import { useGetUsersQuery } from "../redux/api/userApi";
import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import SortBlock from "../components/SortBlock/SortBlock";
import AddContactForm from "../components/AddContactForm/AddContactForm";

const ContactsPage = () => {
  const [search, setSearch] = useState("");
  const { data: users = [], isLoading, isError } = useGetUsersQuery();
  const [sort, setSort] = useState<"asc" | "desc">("asc");
  const [modalOpen, setModalOpen] = useState(false);

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage message="Error loading contacts" />;

  return (
    <Container sx={{ height: "100vh", overflow: "hidden" }}>
      <Stack>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box sx={{ flex: 1, width: 300 }}>
            <SearchField value={search} onChange={setSearch} />
          </Box>
          <SortBlock sort={sort} onSortChange={setSort} />
          <Button onClick={() => setModalOpen(true)}>Add User</Button>
        </Box>

        <ContactList search={search} users={users} sort={sort} />

        <Dialog
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Add new user</DialogTitle>
          <DialogContent>
            <AddContactForm onClose={() => setModalOpen(false)} />
          </DialogContent>
        </Dialog>
      </Stack>
    </Container>
  );
};

export default ContactsPage;
