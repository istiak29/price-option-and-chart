
import PropTypes from 'prop-types';

Link.propTypes = {
  route: PropTypes.object
};

function Link({route}) {
  return (
    <div>
      <li className="mr-10 hover:bg-slate-200 ">
        <a href={route.path}>{route.title}</a>
      </li>
    </div>
  );
}

export default Link;