import { useCallback } from "react";
import { ToggleButtonGroup, ToggleButton, Box } from "@mui/material";

interface SortBlockProps {
  sort: "asc" | "desc";
  onSortChange: (v: "asc" | "desc") => void;
}

const SortBlock = ({ sort, onSortChange }: SortBlockProps) => {
  const handleChange = useCallback(
    (_: unknown, value: "asc" | "desc" | null) => {
      if (value) onSortChange(value);
    },
    [onSortChange]
  );

  return (
    <Box>
      <ToggleButtonGroup
        value={sort}
        exclusive
        size="small"
        onChange={handleChange}
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
};

export default SortBlock;
