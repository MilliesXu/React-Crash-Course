import PropTypes from "prop-types";
import { useLocation } from "react-router";
import Button from "./Button";

const Header = ({ title, onAdd, showAddTasks }) => {
  const location = useLocation();

  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <Button
          color={!showAddTasks ? "green" : "red"}
          text={!showAddTasks ? "Add" : "Close"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
