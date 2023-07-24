import React from "react";
import Swal from "sweetalert2";

const UserDetailsUpdate = ({ item }) => {
  const { _id, name, email, details } = item;
  const handleUpdateProfile = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const details = form.details.value;

    const updatedProfile = {
      name,
      email,
      details,
    };

    console.log(updatedProfile);

    // send data to the server
    fetch(`https://book-college-server-beta.vercel.app/Booking/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProfile),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="lg:text-3xl font-extrabold">Update Your Information</h2>
      <form onSubmit={handleUpdateProfile}>
        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Candidate Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                defaultValue={name}
                placeholder="Admission Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 lg:ml-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="email"
                defaultValue={email}
                placeholder="Candidate Email"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="details"
                defaultValue={details}
                placeholder="Address"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Update Information"
          className="btn btn-block"
        />
      </form>
    </div>
  );
};

export default UserDetailsUpdate;
