import { Typography, Box } from "@mui/material";

const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Typography>{message}</Typography>
    </Box>
  );
};

export default ErrorMessage;
