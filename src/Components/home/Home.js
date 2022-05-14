import Header from "../header/Header";
import Form from "../form/Form";
import Result from "../result/Result";
import { useState } from "react";
import axios from 'axios';
export default function Home() {
    const [form, setForm] = useState({});
    const getForm = (form) => {
      setForm(form);
    }
  return (
    <>
      <Header />
      <h6> homepage 🏠</h6>
      <Form  handleReq={getForm}/>
      <Result method = {form.method} url = {form.url}/>
    </>
  );
}

