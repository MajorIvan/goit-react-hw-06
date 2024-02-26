import { useDispatch } from "react-redux";
import { deleteContacts } from "../../redux/contactsSlice";
import css from "./Contact.module.css";

export default function Contact({ contact }) {
  const dispatch = useDispatch();
  return (
    <li className={css.item}>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button onClick={() => dispatch(deleteContacts(contact.id))}>
        Delete
      </button>
    </li>
  );
}
