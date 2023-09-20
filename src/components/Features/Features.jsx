
import { AiFillCheckCircle } from "react-icons/ai";
import PropTypes from 'prop-types';

Features.propTypes = {
    feature: PropTypes.object
};

function Features({feature}) {
    return (
      <div>
        <p className="flex items-center">
          <AiFillCheckCircle className="mr-3"></AiFillCheckCircle>
          {feature}
        </p>
      </div>
    );
}

export default Features;