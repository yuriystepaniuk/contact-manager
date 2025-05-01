import { memo } from "react";
import { Box, Button } from "@mui/material";
import SearchField from "../SearchField/SearchField";
import SortBlock from "../SortBlock/SortBlock";

interface ContactListHeaderProps {
  search: string;
  onSearchChange: (v: string) => void;
  sort: "asc" | "desc";
  onSortChange: (v: "asc" | "desc") => void;
  onAddUserClick: () => void;
}

const ContactListHeader = ({
  search,
  onSearchChange,
  sort,
  onSortChange,
  onAddUserClick,
}: ContactListHeaderProps) => (
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
      <SearchField value={search} onChange={onSearchChange} />
    </Box>
    <SortBlock sort={sort} onSortChange={onSortChange} />
    <Button onClick={onAddUserClick}>Add User</Button>
  </Box>
);
export default memo(ContactListHeader);
