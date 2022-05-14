import JSONPretty from 'react-json-pretty';
function Result(props) {
   
        return (
          <div id="res">
<p><strong>{`${props.method} `}</strong></p>
                    <p>{props.url}</p>

          </div>
        )
}
export default Result;