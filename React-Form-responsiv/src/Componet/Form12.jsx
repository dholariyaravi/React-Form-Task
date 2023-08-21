import React, { useEffect, useState } from "react";
import "./Foemtype.css";
import { useNavigate } from "react-router-dom";
import { Link, json } from 'react-router-dom';
import Login from "./Login";
import { toast } from "react-toastify";
import validation from "./Validation";
import UserData from "./UserData";

const Form12 = () => {

  const [submittedData, setSubmittedData] = useState(() => {
    const saved = localStorage.getItem("USERData");
    const initialValue = JSON.parse(saved);
    return initialValue || "";
  });

  // const [submittedData, setSubmittedData] = useState([]);
  
  const naviget = useNavigate()

  const [add, setadd] = useState(-1);

  const [data, setdata] = useState({
    Date: "",
    Fristname: "",
    Middlename :"",
    Lastname: "",
    email: "",
    MobaliNo: "",
    password: "",
    Confrmpassword:"",
  });

    // validator in req ............ 
    const [errors, seterrors] = useState({});
    // console.log(errors)

  const myhendal = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  // ====================localStorage DATA======================= 

  useEffect(() => {
    localStorage.setItem('USERData', JSON.stringify(submittedData));

  }, [submittedData]);

  // ========================Delete=======================
  function mydelete(index) {
    console.log(index, "this index row want to be delete");
    let total = [...submittedData]
    total.splice(index, 1)
    setSubmittedData(total)
  }
  // ========================Edit=======================
  const myupdate = (index) => {
    let updata = submittedData[index]
    setdata(updata)
    setadd(index)
  }
  // ===================data submit and..============================
  const mychenaj = (e) => {
    e.preventDefault();

    seterrors(validation(data));
 

    setSubmittedData((predata) => [...predata, data]);
    setdata({ data })

    if (add >= 0) {
      let p = [...submittedData]
      p[add].Fristname = data.Fristname
      p[add].Middlename = data.Middlename
      p[add].Lastname = data.Lastname
      p[add].email = data.email
      p[add].MobaliNo = data.MobaliNo
      p[add].password = data.password
      p[add].Confrmpassword = data.Confrmpassword
      setSubmittedData(p)
    } else {

      const mydata11 = [...submittedData]
      mydata11.push(data)
      setSubmittedData(mydata11)
    }
    setadd(-1);

  };

  return (
    <div>
      <form onSubmit={mychenaj} className="Form_11">

        <h2>SIGN-UP</h2>

        <label className="px-5"></label>

        <div className="row">
          <div className="col-sm-8">  </div>

          <div className="col-sm-4 text-end">
            Date :-
            <input type="Date"
              name="Date"
              className="Date_pro"
              value={data.Date || ""}
              onChange={myhendal}
            />
            <br />
            <br />
          </div>


          <div className="col-sm-6">
            <label className="">Fristname </label>
            <input
              type="text"
              name="Fristname"
              value={data.Fristname || ""}
              className="Form_12pro"
              placeholder="Fristname"
              onChange={myhendal}
            />
            <br />
            <br />
          </div>

          <div className="col-sm-6">
            <label className="">Middlename </label>
            <input
              type="text"
              name="Middlename"
              value={data.Middlename || ""}
              className="Form_12pro"
              placeholder="Middlename"
              onChange={myhendal}
            />
            <br />
            <br />
          </div>
        

          <div className="col-sm-6">
            <label className="text-start">Lastname</label>
            <input
              type="text"
              name="Lastname"
              value={data.Lastname || ""}
              className="Form_12pro"
              placeholder="Lastname"
              onChange={myhendal}
            />
            <br />
            {/* {errors.Lastname && <span style={{ color: 'red' }}>{errors.Lastname}</span>} */}
            <br />
          </div>

          <div className="col-sm-6">
            <label className="px-3">email</label>
            <input
              type="text"
              name="email"
              value={data.email || ""}
              className="Form_12pro"
              placeholder="email"
              onChange={myhendal}
            />
             {/* {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>} */}
            <br />
            <br />
          </div>

          <div className="col-sm-6">
            <label>MobaliNo</label>
            <input
              type="text"
              name="MobaliNo"
              value={data.MobaliNo || ""}
              className="Form_12pro"
              placeholder="MobaliNo"
              onChange={myhendal}
            />
            <br />
            <br />
          </div>

          <div className="col-sm-6">
            <label className="px-3">Password</label>
            <input
              type="password"
              name="password"
              value={data.password || ""}
              className="Form_12pro"
              placeholder="password"
              onChange={myhendal}
            />
            
            <br />
            <br />
          </div>

          <div className="col-sm-6">
            <label className="px-3">Confrm password</label>
            <input
              type="password"
              name="Confrmpassword"
              value={data.Confrmpassword || ""}
              className="Form_12pro"
              placeholder="Confrm password"
              onChange={myhendal}
            />
            
            <br />
            <br />
          </div>

          <br />
          <br />

        </div>

        <br />
        <br />
        <span className="px-5"></span>
        <input
          type="submit"
          value="submit"
          className="btn btn-dark button_pro text-center"
        />

      </form>
      <div className='text-center'>
        <Link to={"/login"} >Already have an account?</Link>
      </div>
      <br />


      {/* ========================= / */}
      <div>
        <h3>USERDATA</h3>
        <table className="center_gred1" border={1} width="auto" cellPadding={22}>
          <tbody>
            <tr>
              <th>Date</th>
              <th>Fristname</th>
              <th>Middlename</th>
              <th>Lastname</th>
              <th>email</th>
              <th>password</th>
              <th>Confrmpss..</th>
              <th>MobaliNo</th>
            </tr>
            {submittedData.map((data, index) => {
              return (
                <tr key={index} >
                  <td>{data.Date}</td>
                  <td>{data.Fristname}</td>
                  <td>{data.Middlename}</td>
                  <td>{data.Lastname}</td>
                  <td>{data.email}</td>
                  <td>{data.password}</td>
                  <td>{data.Confrmpassword}</td>
                  <td>{data.MobaliNo}</td>
                  <td><button className="btn btn-dark my-1" onClick={() => myupdate(index)}>Update</button></td>
          
                  <button
                    className="delete button btn btn-dark my-3"
                    onClick={() => {
                      const confirmBox = window.confirm(
                        "Do you really want to delete this Crumb?"
                      )
                      if (confirmBox === true) {
                        mydelete(index)
                      }
                    }}>
                    Delete
                  </button>

                </tr>
              )
            }
            )}
          </tbody>
        </table>
      </div>

      {/* // <UserData submittedData={submittedData} mydelete={mydelete} myupdate={myupdate}/> */}

      <br />
      <br />

    </div>
  );
};

export default Form12;
