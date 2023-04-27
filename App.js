import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';

function App() {

  const [data1, setdata] = useState({
    value: ""
  })

  const [data, getdata] = useState({
    disease: ""
  })

  const fun = async () => {
    const x = data1.value;
    await fetch("/data", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(x) }).then((res) =>
      res.json().then((data) => {
        getdata({
          disease: data.disease
        });
      }).catch(err => console.log(err))
    );
  }

  return (


    <div className="App">
      <section>
        <div class="page">
          <div class="welcome">
            <h2>Welcome Back!</h2>
            <p>Hello Kushal</p>
            <br />
            <p>Upload the photo of the skin where you are feeling not well.</p>
          </div>
          <div class="sub">
            <div id="form">
              <h2>Upload Photo</h2>
              <input type="text" name="name" placeholder="Full Name" required /><br />
              <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" placeholder="Phone" /><br />
              <select name="gender" id="gender">
                <option value="Select">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select><br /><br />
              <input type="text" name="email" id="picurl" onChange={e => setdata({value : e.target.value})}/><br /><br />
              <input type="submit" onClick={fun}  name="sub" value="Upload" class="up" />
              <p>{data.disease}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
