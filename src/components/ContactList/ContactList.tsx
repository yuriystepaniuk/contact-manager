import { useState, useEffect, useRef } from "react";
import { Box, Stack, Pagination } from "@mui/material";
import ContactItem from "../ContactItem/ContactItem";
import {
  filterUsers,
  sortUsers,
  paginateUsers,
  getTotalPages,
  usePerPage,
} from "../../utils/contacts";
import { User } from "../../types/user.types";

interface Props {
  search: string;
  users: User[];
  sort: "asc" | "desc";
}

const ContactList = ({ search, users, sort }: Props) => {
  const perPage = usePerPage();
  const [page, setPage] = useState(1);
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setPage(1);
  }, [search]);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [page, sort]);

  const filtered = filterUsers(users, search);
  const sorted = sortUsers(filtered, sort);
  const totalPages = getTotalPages(filtered.length, perPage);
  const paginated = paginateUsers(sorted, page, perPage);

  return (
    <Box sx={{ height: "85dvh", display: "flex", flexDirection: "column" }}>
      <Box ref={listRef} sx={{ overflowY: "auto", flexGrow: 1 }}>
        <Stack spacing={2}>
          {paginated.length === 0 && (
            <Box sx={{ textAlign: "center", p: 2 }}>No contacts found</Box>
          )}
          {paginated.map((user) => (
            <ContactItem key={user.id} name={user.name} email={user.email} />
          ))}
        </Stack>
      </Box>

      {totalPages > 1 && (
        <Box sx={{ p: 1 }}>
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
