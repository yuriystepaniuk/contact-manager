import { ToggleButtonGroup, ToggleButton, Box } from "@mui/material";
interface SortBlockProps {
  sort: "asc" | "desc";
  onSortChange: (v: "asc" | "desc") => void;
}
const SortBlock = ({ sort, onSortChange }: SortBlockProps) => (
  <Box sx={{ ml: 1 }}>
    <ToggleButtonGroup
      value={sort}
      exclusive
      size="small"
      onChange={(e, v) => v && onSortChange(v)}
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
