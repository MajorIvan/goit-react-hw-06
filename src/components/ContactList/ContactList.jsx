import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";

export default function ContactList() {
  const storedContacts = useSelector((state) => state.contacts.items);
  const filterValue = useSelector((state) => state.filters.name);

  const visibleContacts = storedContacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue)
  );

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}
