import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function SingleNote() {
  const params = useParams();

  const [data, setData] = useState({});

  const FetchNote = async () => {
    let temp = await JSON.parse(localStorage.getItem("notes"));

    temp = temp.filter((elem) => {
      return elem.id === params.id;
    });
    console.log(temp);
    setData(temp[0]);
  };

  useEffect(() => {
    FetchNote();
    console.log("called");
  }, []);

  return (
    <div>
      <Navbar />

      <div className='container-lg pt-5'>
        <nav aria-label='breadcrumb '>
          <ol class='breadcrumb'>
            <li class='breadcrumb-item'>
              <Link to='/'>Home</Link>
            </li>
            <li
              class='breadcrumb-item active pb-5 text-black-50'
              aria-current='page'
            >
              {data.title}
            </li>
          </ol>
        </nav>
        <h2>{data.title}</h2>
        <span>{data.note}</span>
      </div>
    </div>
  );
}

export default SingleNote;
