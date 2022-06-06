import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   dateCompleted: "",
   title: "",
   megReview: "",
   favChar: "",
   favEp: "",
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({ dateCompleted: "", title: "", megReview: "", favChar: "",favEp: "" });
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div>
     <h3>Create New Record</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label>Anime Title</label>
         <input
           type="text"
           className="form-control"
           id="title"
           value={form.title}
           onChange={(e) => updateForm({ title: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label>Date Completed</label>
         <input
           type="text"
           className="form-control"
           id="dateCompleted"
           value={form.dateCompleted}
           onChange={(e) => updateForm({ dateCompleted: e.target.value })}
         />
       </div>
       
       <div className="form-group">
         <label>Meg's Review</label>
         <input
           type="text"
           className="form-control"
           id="megReview"
           value={form.megReview}
           onChange={(e) => updateForm({ megReview: e.target.value })}
         />
       </div>

       <div className="form-group">
         <label>Favourite Episode</label>
         <input
           type="text"
           className="form-control"
           id="favEp"
           value={form.favEp}
           onChange={(e) => updateForm({ favEp: e.target.value })}
         />
       </div>
       
       <div className="form-group">
         <label>Favourite Character</label>
         <input
           type="text"
           className="form-control"
           id="favChar"
           value={form.favChar}
           onChange={(e) => updateForm({ favChar: e.target.value })}
         />
       </div>
       <div className="form-group">
         <input
           type="submit"
           value="Add Anime"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}