import { useForm, Controller } from "react-hook-form";
import { TextField, Button, Stack, Box } from "@mui/material";
import { useAddUserMutation } from "../../redux/api/userApi";

interface AddContactFormProps {
  onClose: () => void;
}

interface FormValues {
  name: string;
  email: string;
}

const AddContactForm = ({ onClose }: AddContactFormProps) => {
  const { control, handleSubmit, reset } = useForm<FormValues>({
    defaultValues: { name: "", email: "" },
  });

  const [addUser, { isLoading }] = useAddUserMutation();

  const onSubmit = async (data: FormValues) => {
    try {
      await addUser(data).unwrap();
      reset();
      onClose();
    } catch (error) {
      console.error("Failed to add user:", error);
    }
  };

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
