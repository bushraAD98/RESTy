import "./form.scss";

import { useState } from "react";
const Form = (props) => {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [body, setBody] = useState(null);
  const handleURL = (e) => {
    e.preventDefault();
    setUrl(e.target.value);
  };
  const handleMethod = (e) => {
    e.preventDefault();
    setMethod(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      method: method,
      url: url,
      body: null,
    };
    let action = {
      payload: {
        method: data.method,
        url: data.url,
        body: data.body,
      },
    };
    if (body) 
    {data.body = body;}
    props.handelApi(data);
    props.newHistory(action.payload);
  };

  const handleBody = (e) => {
    e.preventDefault();
    setBody(e.target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div id="section1">
          <input
            type="url"
            id="link"
            name="link"
            placeholder="http://api.url.here"
            maxLength="50"
            size="50"
            height="150"
            onChange={handleURL}
          />
          {/* <button type="submit" id="go" onClick={props.handleClick }>
            {" "}
            GO!
          </button> */}
          <input
            className="btn"
            type="submit"
            value="Go!"
            onClick={!props.isloading ? props.handleClick : null}
          />
        </div>

        <div id="section2">
          <button id="get" value="GET" onClick={handleMethod}>
            GET
          </button>
          <button id="post" value="POST" onClick={handleMethod}>
            POST
          </button>
          <button id="put" value="PUT" onClick={handleMethod}>
            PUT
          </button>
          <button id="delete" value="DELETE" onClick={handleMethod}>
            DELETE
          </button>
          <textarea
            id="text"
            rows="15"
            cols="50"
            onChange={handleBody}
          ></textarea>
        </div>
      </form>
    </>
  );
};
export default Form;
