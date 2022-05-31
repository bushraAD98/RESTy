import React from "react";
import "./result.scss";
import JSONPretty from "react-json-pretty";

function Result(props) {
  if (!props.isloading) {
    return (
      <div>
        <div>
          {
            <p>
              {props.method}
            </p>
          }
          <p>{props.url}</p>
        </div>
        <div>
          <JSONPretty data={props.header} />
          <JSONPretty data={props.data} />
        </div>
      </div>
    );
  } else {
    return (
      <div >
        <div >
          <p>
            {props.method}
          </p>
          <p>{props.url}</p>
        </div>
        <div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }
}
export default Result;
