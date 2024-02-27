import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts, selectFilters } from "../../redux/selectors";

export default function ContactList() {
  const storedContacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilters);

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
