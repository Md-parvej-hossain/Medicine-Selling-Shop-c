/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const Slide = ({ image }) => {
  return (
    <div
      className="w-full bg-center bg-cover h-[32rem]"
      style={{
        backgroundImage: `url(${image}) `,
        
      }}
    >
      <div className="flex items-center justify-center w-full h-full ">
        <div className="text-center">
         
          <br />
        
        </div>
      </div>
    </div>
  );
};

export default Slide;
