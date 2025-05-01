import { Paper, Typography } from "@mui/material";

interface ContactItemProps {
  name: string;
  email: string;
}

const ContactItem = ({ name, email }: ContactItemProps) => (
  <Paper>
    <Typography noWrap>{name}</Typography>
    <Typography noWrap>{email}</Typography>
  </Paper>
);

export default ContactItem;
