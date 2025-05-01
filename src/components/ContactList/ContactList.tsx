import { useState, useEffect } from "react";

import { Box, Stack, Pagination, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import ContactItem from "../ContactItem/ContactItem";
import { User } from "../../types/user.types";

interface Props {
  search: string;
  users: User[];
}

const ContactList = ({ search, users, sort }: Props) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const perPage = isMobile ? 7 : 10;
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
  }, [search]);

  const filtered = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / perPage);
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  return (
    <Box sx={{ height: "85dvh", display: "flex", flexDirection: "column" }}>
      <Box sx={{ overflowY: "auto", flexGrow: 1 }}>
        <Stack spacing={2}>
          {paginated.map((user) => (
            <ContactItem key={user.id} name={user.name} email={user.email} />
          ))}
        </Stack>
      </Box>

      {totalPages > 1 && (
        <Box sx={{ borderTop: 1, borderColor: "divider", p: 1 }}>
          <Pagination
            count={totalPages}
            page={page}
            defaultPage={1}
            onChange={(_, value) => setPage(value)}
            siblingCount={0}
            sx={{ display: "flex", justifyContent: "center" }}
          />
        </Box>
      )}
    </Box>
  );
};

export default ContactList;
