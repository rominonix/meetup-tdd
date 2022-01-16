import "./Navigation.style.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [menu, setMenu] = useState(true);

  const changeMenu = () => {
    if (localStorage.getItem("email") !== null) {
      setMenu(false);
    } else {
      console.log(`user not found`);
    }
  };

  useEffect(() => {
    changeMenu();
  }, [menu]);

  useEffect(() => {
    window.addEventListener("storage", () => {
      // When local storage changes, dump the list to
      // the console.
      console.log("RUNNING WHEN localstorgaet updates");
      // if (localStorage.getItem("email") !== null) {
      //   console.log(`user login`);
      //   setMenu(false);
      // } else {
      //   setMenu(true);

      //   console.log(`user not found`);
      // }
      // console.log("nnn");
    });
  }, [menu]);

  return (
    <div>
      <div className="navigation">
        <Link to="/" className="link">
          <h2>MeetUp 🎉 </h2>
        </Link>
        <nav>
          {menu ? (
            <ul>
              <li>
                <Link to="/login" className="link">
                  Sign In
                </Link>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <Link to="/profile" className="link">
                  My profile
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navigation;
