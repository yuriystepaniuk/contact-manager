import { Paper, Typography } from "@mui/material";

interface ContactItemProps {
  name: string;
  email: string;
}

const ContactItem = ({ name, email }: ContactItemProps) => (
  <Paper>
    <Typography>{name}</Typography>
    <Typography>{email}</Typography>
  </Paper>
);

export default ContactItem;
