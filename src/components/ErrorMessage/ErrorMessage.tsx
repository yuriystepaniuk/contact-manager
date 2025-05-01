import { Typography } from "@mui/material";

const ErrorMessage = ({ message }: { message: string }) => {
  return <Typography>{message}</Typography>;
};

export default ErrorMessage;
