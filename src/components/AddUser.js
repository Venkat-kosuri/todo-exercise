import { Modal } from "react-bootstrap";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
const AddUser = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitdata = (data) => {
    axios
      .post("https://reqres.in/api/users", {
        email: email,
        first_name: firstName,
        last_name: lastName,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.status);
      });
  };
  return (
    <>
      <button className="btn btn-outline-warning" onClick={handleShow}>
        Add User
      </button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h1 className="modal-name">Add User</h1>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit(submitdata)}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleInputtext"
                aria-describedby="textHelp"
                placeholder="Full Name"
                {...register("firstName", { required: true })}
                value={firstName}
                onChange={(e) => setfirstName(e.target.value)}
              />
            </div>
            {errors.firstName && (
              <p className="text-danger error-color">Enter a valid full name</p>
            )}

            <div className="mb-3 d-flex justify-content-between">
              <input
                placeholder="Last Name"
                type="text"
                {...register("lastName", { required: true })}
                className="form-control "
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            {errors.lastName && (
              <p className="text-danger error-color">Enter a valid Last name</p>
            )}
            <div className="mb-3 d-flex justify-content-between">
              <input
                className="form-control"
                id="exampleInputtext"
                aria-describedby="textHelp"
                placeholder="Email Id"
                type="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                })}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {errors.email && (
              <p className="text-danger error-color">Enter a valid email</p>
            )}

            <Modal.Footer>
              <button type="submit" className="btn btn-outline-success">
                Add User
              </button>
            </Modal.Footer>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddUser;
