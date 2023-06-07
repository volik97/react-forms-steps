import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
import { onSubmit } from "../App";

export default function InputFC({addItem}: onSubmit) {
    const [form, setForm] = useState({
        date: "",
        distance: 0
      });

  const {date, distance} = form
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setForm(prevForm => ({...prevForm, [name]: value}))
  }
 
  const clearForm = () => {
    setForm(prevForm => ({...prevForm, date: "", distance: 0}))
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {id:uuidv4(), date, distance}
    addItem(data)
    clearForm()
  } 

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='date'>Date</label>
      <input
        name="date"
        className="date"
        onChange={handleChange}
        value={date}
        placeholder="11.09.2001"
      />
      <label htmlFor='distance'>Distance</label>
      <input
        name="distance"
        className="distance"
        onChange={handleChange}
        value={distance}
        placeholder="Километры"
      />
      <button type="submit">OK</button>
    </form>
  );
}
