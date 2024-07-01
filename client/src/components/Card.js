import React from "react";
import { useState } from "react";
export default function Card() {
  const [total, setTotal] = useState("");
  const [plate, setplate] = useState("Quarter");

  const quantitychange = (event) => {
    const selectedValue = event.target.value;
    setTotal(selectedValue);
  };
  const platechange = (event) => {
    const selectedValue = event.target.value;
    setplate(selectedValue);
  };
  return (
    <div>
      <div className="card mt-3 bg-dark" style={{ width: "18rem", maxHeight: "36rem" ,color:'white', border: "1px solid grey"}}>
        <img
          className="card-img-top"
          src="https://th.bing.com/th/id/R.fb25cc105c52de69ffde15354077dd94?rik=sqLKLhJ9jaZMYg&riu=http%3a%2f%2fbevcooks.com%2fwp-content%2fuploads%2f2011%2f10%2fbutter7.jpg&ehk=rhnjW11ZUdCFucmhU3uqGcKRpNZNrJsXo1tdYHdKOSc%3d&risl=&pid=ImgRaw&r=0"
          alt="Card image cap"
          style={{ width: '100%', height: '14rem' }}
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">This is the text</p>
          <div className="container w-100 d-flex align-items-left" >
            <select
              className="m-2 h-100 w-10 bg-success rounded"
              value={total}
              onChange={quantitychange}
              style={{color:'white'}}
            >
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>

            <select
              className="m-2 h-100 w-30 bg-success rounded"
              onChange={platechange}
              style={{color:'white'}}
            >
              <option value="quarter">Quarter</option>
              <option value="half">Half</option>
              <option value="full">Full</option>
            </select>

            
          </div>
          <div className="d-inline h-100 fs-5 d-flex align-items-center">
  Total:
  {total && (
    <p className="text-white mb-0 ms-2">{total} {plate}</p>
  )}
</div>


        </div>
      </div>
      
    </div>
  );
}
