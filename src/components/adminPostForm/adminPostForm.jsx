"use client"

import { addPost } from "@/lib/actions";
import styles from "./adminPostForm.module.css"
import { useFormState } from 'react-dom';
const adminPostForm = ({ userId }) => {

    const [state, formAction] = useFormState(addPost, undefined);

  return (
    <form action={formAction} className={styles.container}>
        <h1>Add New Post</h1>
        <input type="hidden" name="userId" value={userId} />
        <input type="text" placeholder="Title" name="title" />
        <input type="text" placeholder="Slug" name="slug" />
        <input type="text" placeholder="img" name="img" />
        <textarea type="text" name="desc" placeholder="desc" rows={10} />
        <button>Add</button>
        {state?.error}
    </form>
  )
}

export default adminPostForm