import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Stack, Box } from "@mui/material";
import { FormValues } from "../../types/formValues.types.ts";

interface AddContactFormProps {
  onSubmit: (data: FormValues) => void;
  onClose: () => void;
  isLoading: boolean;
}

const AddContactForm = ({
  onClose,
  onSubmit,
  isLoading,
}: AddContactFormProps) => {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: { name: "", email: "" },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={2} sx={{ pt: 2 }}>
        <Controller
          name="name"
          control={control}
          rules={{ required: "Name  is required" }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Name"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              fullWidth
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Incorrect email",
            },
          }}
          render={({ field, fieldState }) => (
            <TextField
              {...field}
              label="Email"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
              fullWidth
            />
          )}
        />
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button fullWidth variant="contained" onClick={() => onClose()}>
            Close
          </Button>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            disabled={isLoading}
          >
            {isLoading ? "Adding..." : "Add User"}
          </Button>
        </Box>
      </Stack>
    </form>
  );
};

export default AddContactForm;
