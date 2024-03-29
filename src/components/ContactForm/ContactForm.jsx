import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { addContacts } from "../../redux/contactsSlice";
import css from "./ContactForm.module.css";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "To short")
    .max(50, "To long")
    .required("This is a required field"),
});

export default function ContactForm() {
  const nameId = useId();
  const numberId = useId();
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={userSchema}
      onSubmit={(values, actions) => {
        dispatch(addContacts({ id: nanoid(), ...values }));
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor={nameId}>Name</label>
          <Field className={css.field} type="text" name="name" id={nameId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.formGroup}>
          <label htmlFor={numberId}>Number</label>
          <Field className={css.field} type="tel" name="number" id={numberId} />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
