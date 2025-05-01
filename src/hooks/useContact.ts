import { useGetUsersQuery, useAddUserMutation } from "../redux/api/userApi";
import { FormValues } from "../types/formValues.types";

export const useContacts = () => {
  const { data: users = [], isLoading, isError, refetch } = useGetUsersQuery();

  const [addUser, { isLoading: isAdding }] = useAddUserMutation();

  const handleAddUser = async (data: FormValues) => {
    try {
      await addUser(data).unwrap();
      await refetch();
      return { success: true };
    } catch (error) {
      console.error("Failed to add user:", error);
      return { success: false, error };
    }
  };

  return {
    users,
    isLoading,
    isError,
    addUser: handleAddUser,
    isAdding,
  };
};
