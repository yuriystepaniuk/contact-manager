import { useState } from "react";
import {
  Container,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
} from "@mui/material";

import Loader from "../components/Loader/Loader";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import AddContactForm from "../components/AddContactForm/AddContactForm";
import { useContacts } from "../hooks/useContact";
import ContactsMain from "../components/ContactsMain/ContactsMain";

const ContactsPage = () => {
  const { users, isLoading, isError, addUser, isAdding } = useContacts();

  const [modalOpen, setModalOpen] = useState(false);

  if (isLoading) return <Loader />;
  if (isError) return <ErrorMessage message="Error loading contacts" />;

  const handleSubmit = async (data: { name: string; email: string }) => {
    const result = await addUser(data);
    if (result.success) {
      setModalOpen(false);
    } else {
      alert("Failed to add user. Please try again.");
    }
  };

  return (
    <Container sx={{ height: "100vh", overflow: "hidden" }}>
      <Stack>
        <ContactsMain users={users} onAddUserClick={() => setModalOpen(true)} />
        <Dialog
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Add new user</DialogTitle>
          <DialogContent>
            <AddContactForm
              isLoading={isAdding}
              onSubmit={handleSubmit}
              onClose={() => setModalOpen(false)}
            />
          </DialogContent>
        </Dialog>
      </Stack>
    </Container>
  );
};

export default ContactsPage;
