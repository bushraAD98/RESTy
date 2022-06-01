// import Header from "../header/Header";
import Form from "../form/Form";
import Result from "../result/Result";
import { useState, useEffect } from "react";
import superagent from 'superagent';
export default function Home(props) {
    // const [form, setForm] = useState({});
    // function getForm  (form) {
    //   setForm(form);
    // }
    const [data, setData] = useState(null);
    const [request, setRequest] = useState({});
    const [header, setHeader] = useState({});
    const [isloading, setLoad] = useState(false);
    function networkLoading() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
    }
    const handelApi = async (request) => {
      setLoad(true);
      setRequest(request);
   

      const response = await superagent[request.method.toLowerCase()](request.url, (request.body) ? (request.body) : null);
      let result = { Results: response.body }
      setData(result);
      let header = { Header: response.headers }
      setHeader(header);
  }

  const handleClick = () => setLoad(true);
    useEffect(() => {
        if (isloading) {
            networkLoading().then(() => {
                setLoad(false);
            });
        }
    }, [isloading]);
  return (
    <>
      {/* <Header /> */}
      <h6> homepage 🏠</h6>
      <Form handelApi={handelApi} handleClick={handleClick} newHistory={props.newHistory} />
            <Result data={data} method={request.method} url={request.url} header={header} isloading={isloading}/>
    </>
  );
}

