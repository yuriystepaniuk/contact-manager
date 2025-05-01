import { TextField } from "@mui/material";

interface SearchFieldProps {
  value: string;
  onChange: (value: string) => void;
}
const SearchField = ({ value, onChange }: SearchFieldProps) => (
  <TextField
    label="Search by name..."
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);
export default SearchField;
