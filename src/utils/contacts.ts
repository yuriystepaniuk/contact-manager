import { User } from "../types/user.types";
import { useMediaQuery, useTheme } from "@mui/material";

export const filterUsers = (users: User[], search: string): User[] => {
  return users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );
};

export const sortUsers = (users: User[], sort: "asc" | "desc"): User[] => {
  return [...users].sort((a, b) =>
    sort === "asc" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
  );
};

export const paginateUsers = (
  users: User[],
  page: number,
  perPage: number
): User[] => {
  return users.slice((page - 1) * perPage, page * perPage);
};

export const getTotalPages = (usersCount: number, perPage: number): number => {
  return Math.ceil(usersCount / perPage);
};

export const usePerPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return isMobile ? 7 : 10;
};
