import React from "react";
import Swal from "sweetalert2";

const MyCollegeDetails = ({ item }) => {
  const {
    _id,
    name,
    image,
    admissiondate,
    events,
    numberofresearch,
    rating,
    eventsfacilities,
    researchwork,
  } = item;
  const handleUpdateProfile = (event) => {
    event.preventDefault();

    const form = event.target;
    const rating = form.rating.value;

    const updatedrating = {
      rating,
    };

    // console.log(updatedProfile);

    // send data to the server
    fetch(`https://book-college-server-beta.vercel.app/CollegeCard/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedrating),
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
    <div>
      <div>
        <img className="h-[300px] w-[600px] m-auto mt-[20px]" src={image}></img>
      </div>
      <div className="text-center ">
        <h1 className="text-[18px] font-semibold">
          Name:<span className="text-[16px] font-normal">{name}</span>
        </h1>
        <h1 className="text-[18px] font-semibold">
          AdmissionDate:
          <span className="text-[16px] font-normal">{admissiondate}</span>
        </h1>
        <h1 className="text-[18px] font-semibold">
          Events:<span className="text-[16px] font-normal">{events}</span>
        </h1>
        <h1 className="text-[18px] font-semibold">
          NumberOfResearch:
          <span className="text-[16px] font-normal">{numberofresearch}</span>
        </h1>
        {/* <h1 className="text-[18px] font-semibold">
          Rating:<span className="text-[16px] font-normal">{rating}</span>
        </h1> */}
        <form onSubmit={handleUpdateProfile}>
          <div className="form-control w-[70px] lg:ml-[750px] flex justify-between">
            <div>
              <label className="label">
                <span className="label-text text-[18px] font-semibold lg:ml-[0px] ml-[100px] lg:mt-[0px] mt-[20px]">
                  Rating:
                </span>
              </label>
              <label className="input-group lg:mt-[-30px] lg:ml-[100px] ml-[200px] mt-[-40px]">
                <input
                  type="text"
                  name="rating"
                  defaultValue={rating}
                  placeholder="Please rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="lg:ml-[200px] ml-[100px] absolute lg:mt-[10px] mt-[80px]">
              <input
                type="submit"
                value="Update Rating"
                className="btn btn-block "
              />
            </div>
          </div>
        </form>

        <h1 className="text-[18px] font-semibold mt-[100px] lg:mt-[0px]">
          Event Facilities:
          <span className="text-[16px] font-normal">{eventsfacilities}</span>
        </h1>
        <h1 className="text-[18px] font-semibold">
          ResearchWork:
          <span className="text-[16px] font-normal">{researchwork}</span>
        </h1>
      </div>
    </div>
  );
};

export default MyCollegeDetails;
