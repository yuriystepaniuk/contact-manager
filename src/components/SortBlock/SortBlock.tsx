import { ToggleButtonGroup, ToggleButton, Box } from "@mui/material";

interface SortBlockProps {
  sort: "asc" | "desc";
  onSortChange: (v: "asc" | "desc") => void;
}
const SortBlock = ({ sort, onSortChange }: SortBlockProps) => (
  <Box>
    <ToggleButtonGroup
      value={sort}
      exclusive
      size="small"
      onChange={(_, value) => value && onSortChange(value)}
      aria-label="sort order"
    >
      <ToggleButton value="asc" aria-label="ascending">
        A→Z
      </ToggleButton>
      <ToggleButton value="desc" aria-label="descending">
        Z→A
      </ToggleButton>
    </ToggleButtonGroup>
  </Box>
);
export default SortBlock;
