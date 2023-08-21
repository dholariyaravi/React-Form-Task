import React from 'react'

export default function UserData({submittedData,myupdate,mydelete}) {
  return (
    <div>

        <table className="center_gred1" border={1} width="auto" cellPadding={22}>
          <tbody>
            <tr>
              <th>Date</th>
              <th>Fristname</th>
              <th>Middlename</th>
              <th>Lastname</th>
              <th>email</th>
              <th>password</th>
              <th>Confrm password</th>
              <th>MobaliNo</th>
              <th>Gender</th>
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
                  <td>{data.Gender}</td>
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
  )
}
