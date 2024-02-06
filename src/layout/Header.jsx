/* eslint-disable react/prop-types */
import "./Header.css";
function Navbar(props) {
  const { setState } = props;

  return (
    <div>
      <div className="header" style={{ height: "65px" }}>
        <ul style={{ height: "100%" }}>
          <li>
            <a className="logo"></a>
          </li>
          <li>
            <button
              onClick={() => {
                setState("Home");
              }}
            >
              {props.nav.home}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setState("Contact");
              }}
            >
              {props.nav.contact}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setState("About");
              }}
            >
              {props.nav.about}
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setState("Testride");
              }}
            >
              {props.nav.testride}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export { Navbar };
