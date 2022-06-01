
import superagent from "superagent";
import { useState } from "react";
import JSONPretty from "react-json-pretty";
import './history.scss';

function History(props) {
  const [historyState, setHistoryState] = useState({});

  const handleHistory = async (e) => {
    e.preventDefault();
    let arr = e.target.innerText.split(" ");
    let method = arr[0];
    let url = arr[1];
    let body = {};
    props.historyState.history.forEach((element) => {
        body = element.method === method && element.url === url ? element.body : null;
    });
    console.log(props.historyState.history);
    let response = await superagent[method.toLowerCase()](url, null);
    setHistoryState({
      Header: response.headers,
      body: response.body,
    });
  };

  if (props.historyState.history.length > 0) {
    return (
      <>
      <div style={{display: 'flex',gap: '20px'}}> 
          <div>

         
          {props.historyState.history.map((item, indx) => {
            return (
              <div key={indx} onClick={handleHistory}>
                <p>
                  {item.method} {item.url}
                </p>
              </div>
            );
          })}
           </div>
        <div className='div2'>{historyState ? <JSONPretty data={historyState} /> : null}</div>
      </div>
      </>
    );
  } else {
    <div>
      <p>Nothing to render</p>
    </div>;
  }
}

export default History;
