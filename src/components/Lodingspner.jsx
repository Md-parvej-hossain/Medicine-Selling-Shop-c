import PropTypes from 'prop-types';

const Lodingspner = ({ smallHeight }) => {
  return (
    <div
      className={` ${smallHeight ? 'h-[250px]' : 'h-[70vh]'}
      flex 
      flex-col 
      justify-center 
      items-center `}
    >
      <span className="loading loading-ring loading-lg"></span>
    </div>
  );
};
Lodingspner.propTypes = {
  smallHeight: PropTypes.bool,
};
export default Lodingspner;
