"use client"

import { addUser } from "@/lib/actions";
import styles from "./adminUserFom.module.css"
import { useFormState } from 'react-dom';
const adminUserForm = () => {

    const [state, formAction] = useFormState(addUser, undefined);

  return (
    <form action={formAction} className={styles.container}>
        <h1>Add New User</h1>
        <input type="text" placeholder="Username" name="username" />
        <input type="email" placeholder="Email" name="email" />
        <input type="password" placeholder="Password" name="password" />
        <input type="text" placeholder="Profile Picture" name="img" />
        <select name="isAdmin">
            <option value="false">Is Admin?</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
        </select>
        <button>Add</button>
        {state?.error}
    </form>
  )
}

export default adminUserForm