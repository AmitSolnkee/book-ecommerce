import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAddress,
  fetchedStatefromLocalStorage,
  deleteAddress,
} from "../../redux/slices/addresslice/addressSlice";
import { useNavigate } from "react-router-dom";

const Address = () => {
  const address = useSelector((state) => state.addressReducer.address);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  useEffect(() => {
    dispatch(fetchedStatefromLocalStorage());
  }, [dispatch]);
  return (
    <div className="container mt-5 text-center ">
      <div className="row align-items-center justify-content-center">
        <div className="col-10 pe-2">
          <textarea
            rows={3}
            className="w-100 p-2"
            placeholder="Enter Address ..."
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
        </div>
        <div className="col-2">
          <button
            className="btn btn-outline-dark w-100 p-2"
            onClick={() => {
              if (input.trim() !== "") {
                dispatch(addAddress({ id: Date.now(), address: input }));
                setInput("");
              } else {
                alert("Enter Valid Address");
              }
            }}
          >
            Add
          </button>
        </div>
      </div>
      <div className="container mt-4 border-1 p-3 ">
        <h5>You can add upto 3 Address</h5>
        {address.map((item, idx) => {
          return (
            <div key={idx} className="border p-2 mt-5 h-50 text-start ">
              <h5>{`Address${idx + 1} :`}</h5>
              <p>{item.address}</p>
              <div
                className="text-end "
                onClick={() => dispatch(deleteAddress(item.id))}
              >
                <i className="fa-solid fa-trash "></i>
              </div>
            </div>
          );
        })}
        <button className="btn btn-success mt-4 w-50 float-start" onClick={()=>navigate('/payment')}>Proceed</button>
      </div>
    </div>
  );
};

export default Address;
