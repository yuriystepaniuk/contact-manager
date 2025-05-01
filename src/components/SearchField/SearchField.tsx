import { TextField } from "@mui/material";

interface SearchFieldProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchField = ({ value, onChange }: SearchFieldProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return <TextField label="Search..." value={value} onChange={handleChange} />;
};

export default SearchField;
