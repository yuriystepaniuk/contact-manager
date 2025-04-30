import { Stack } from "@mui/material";
import ContactItem from "../ContactItem/ContactItem";

const mockedContacts = [
  { id: 1, name: "John Doe", email: "john@example.com" },
  { id: 2, name: "Jane Smith", email: "jane@example.com" },
];

interface Props {
  search: string;
}
const ContactList = ({ search }: Props) => (
  <Stack>
    {mockedContacts.map((contact) => (
      <ContactItem key={contact.id} name={contact.name} email={contact.email} />
    ))}
  </Stack>
);

export default ContactList;
