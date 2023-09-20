import PropTypes from "prop-types";

const Link = ({ route }) => {
  const { path, title } = route;
  return (
    <li className="mr-10 hover:bg-slate-200 ">
      <a href={path}>{title}</a>
    </li>
  );
};

Link.propType = {
  route: PropTypes.object,
};
export default Link;
