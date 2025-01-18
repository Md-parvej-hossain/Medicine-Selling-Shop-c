import { Link } from 'react-router-dom';

const CatagoreCart1 = ({ item }) => {
  const { category, description, img, madicenName, price, quantity } =
    item || '';
  console.log();

  return (
    <Link to={`/category/${category}`}>
      <div className="card bg-base-100  shadow-xl">
        <figure className="px-10 pt-10">
          <img src={img} alt="madicen img" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Category :{category}</h2>
          <p>{description}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CatagoreCart1;
