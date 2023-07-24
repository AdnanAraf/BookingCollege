import { data } from "autoprefixer";
import React from "react";
import Swal from "sweetalert2";

const CollegeAdmissionForm = () => {
  const handleAddAdmission = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const subject = form.subject.value;
    const email = form.email.value;
    const number = form.number.value;
    // const category = form.category.value;
    const details = form.details.value;

    const Newadmission = {
      name,
      subject,
      email,
      number,
      details,
    };
    console.log(Newadmission);
    /// send data to the server

    fetch("https://book-college-server-beta.vercel.app/Booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(Newadmission),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    if (data.insertedID) {
      Swal.fire({
        title: "Success!",
        text: "Successfully AddMission",
        icon: "success",
        confirmButtonText: "Cool",
      });
    }
  };
  return (
    <div>
      <div className="bg-[#F4F3F0] p-24">
        <h2 className="lg:text-3xl font-extrabold">Add Admission Form</h2>
        <form onSubmit={handleAddAdmission}>
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
                  placeholder="Candidate Name"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 lg:ml-4">
              <label className="label">
                <span className="label-text">Candidate Subject</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="subject"
                  placeholder="Candidate Subject"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
          </div>
          {/* form supplier row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Candiddate Email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="email"
                  placeholder="Candidate Email"
                  className="input input-bordered w-full"
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 lg:ml-4">
              <label className="label">
                <span className="label-text">Candidate Phone Number</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="number"
                  placeholder="Candidate Phone Number"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form category and details row */}
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  placeholder="Category"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 lg:ml-4">
              <label className="label">
                <span className="label-text">Candidata Address</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  placeholder="Details"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form Photo url row */}
          <div className="mb-8">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input type="submit" value="Submit" className="btn btn-block" />
        </form>
      </div>
    </div>
  );
};

export default CollegeAdmissionForm;
