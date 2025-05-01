import { memo } from "react";
import { useState } from "react";
import ContactListHeader from "../ContactListHeader/ContactListHeader";
import ContactList from "../ContactList/ContactList";
import { User } from "../../types/user.types";

interface Props {
  onAddUserClick: () => void;
  users: User[];
}

const ContactsMain = ({ onAddUserClick, users }: Props) => {
  const [sort, setSort] = useState<"asc" | "desc">("asc");
  const [search, setSearch] = useState("");

  return (
    <>
      <ContactListHeader
        search={search}
        onSearchChange={setSearch}
        sort={sort}
        onSortChange={setSort}
        onAddUserClick={onAddUserClick}
      />
      <ContactList search={search} users={users} sort={sort} />
    </>
  );
};

export default memo(ContactsMain);
