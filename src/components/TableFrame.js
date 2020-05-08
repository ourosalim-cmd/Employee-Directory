import React from "react";
 //import "../styles/DataBody.css";

function MyTable({ users }) {
  function formatDate(date) {
    const myDate = date.split("-");
    const getYear = myDate[0];
    const getMonth = myDate[1];
    const aDay = myDate[2].split("T");
    const getDay = aDay[0];
    const fullDate = [getMonth, getDay, getYear].join("/");
    return fullDate;
  }

  return (
    <tbody>
      {users[0] !== undefined && users[0].name !== undefined ? (
        users.map(({ login, name, picture, phone, email, dob }) => {
          return (
            <tr key={login.username}>
              <td cellData ="Image">
                <img
                  src={picture.thumbnail}
                  alt=""
                />
              </td>
              <td cellData="Name">
                {name.first} {name.last}
              </td>
              <td cellData = "Phone">
                {phone}
              </td>
              <td cellData = "Email" >
                <a href={"email:" + email} target="">
                  {email}
                </a>
              </td>
              <td cellData="DOB">
              {/* className="align-middle" */}
                {formatDate(dob.date)}
              </td>
            </tr>
          );
        })
      ) : (
        <></>
      )}
    </tbody>
  );
}

export default MyTable;
