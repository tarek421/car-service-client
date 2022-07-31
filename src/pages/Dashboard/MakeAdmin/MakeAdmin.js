import { Alert, CircularProgress, TextField } from "@mui/material";
import Swal from 'sweetalert2';
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import './MakeAdmin.css';

const MakeAdmin = () => {
  const [users, setUsers] = useState([]);
  const [success, setSuccess] = useState(false);
  const [lodding, setLodding] = useState(false);
  const { token, user } = useAuth();

  useEffect(() => {
    const url = `https://car-services.herokuapp.com/users`;
    fetch(url)
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    setLodding(true)

    const userss = {
      email: data.email,
      role: data.role
    }
    const filterUser = users.filter(u => u.email === user.email);
    if (filterUser[0]?.role === "administer") {
      const requestedEmail = users.find(user => user.email === data.email);
      if (requestedEmail?.email) {
        fetch("https://car-services.herokuapp.com/admin", {
          method: "PUT",
          headers: {
            "content-type": "application/json",
            "authorization": `Bearer ${token}`,
          },
          body: JSON.stringify(userss),
        })
          .then((res) => res.json())
          .then((data) => {
            setLodding(false)
            setSuccess(true);
          });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'change admin role before register the user!',
        })
        setLodding(false);
      }

    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Only Administer can change admin role!',
      })
      setLodding(false)
    }
  };


  return (
    <div id="makeAdmin">
      <h2 className="text-center mb-5">Make an Admin</h2>
      {
        lodding && <CircularProgress />
      }
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("email")}
          type="email"
          label="Email"
          variant="outlined"
          required
        />

        <select name="role" id="role" required {...register("role")}>
          <option value="">Role</option>
          <option value="administer">Administer</option>
          <option value="admin">Admin</option>
          <option value="visitor">Visitior</option>
        </select>
        <button type="submit" className="submit-button">
          Make Admin
        </button>
        {success && (
          <Alert
            sx={{
              width: "50%",
              margin: "auto",
              background: "#2d377bab",
              color: "white",
              marginTop: "5px",
            }}
            severity="success"
          >
            made admin successfully!
          </Alert>
        )}
      </form>
    </div>
  );
};

export default MakeAdmin;