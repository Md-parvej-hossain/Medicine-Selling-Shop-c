import { FaCartPlus } from 'react-icons/fa';

const ProductCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-20">
      <div className="border border-green-300 rounded-lg shadow-lg p-4 ">
        {/* Discount Badge */}
        <div className="absolute bg-purple-500 text-white text-xs font-bold rounded-full py-1 px-3 top-2 left-2">
          10%
        </div>

        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co.com/t3f3XwZ/img-8.jpg" // Replace with actual product image URL
            alt="Product"
            className="h-36 object-contain"
          />
        </div>

        {/* Product Price */}
        <div className="mt-3">
          <div className="text-red-500 text-lg font-bold">
            $ 3001.50{' '}
            <span className="text-gray-400 line-through text-sm">$ 3335</span>
          </div>
        </div>

        {/* Product Name */}
        <div className="mt-2 text-sm font-semibold">Genove Max ...</div>

        {/* Product Volume */}
        <div className="text-gray-500 text-xs">30 ML</div>

        {/* Ratings */}
        <div className="mt-2">
          <div className="flex items-center text-yellow-400">
            {'★ ★ ★ ★ ★'.split(' ').map((star, index) => (
              <span key={index}>&#9733;</span>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className="mt-4 flex justify-end">
          <button className="bg-pink-200 p-2 rounded-full hover:bg-pink-300 transition">
            <FaCartPlus />
          </button>
        </div>
      </div>
      <div className="border border-green-300 rounded-lg shadow-lg p-4 ">
        {/* Discount Badge */}
        <div className="absolute bg-purple-500 text-white text-xs font-bold rounded-full py-1 px-3 top-2 left-2">
          40%
        </div>

        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co.com/0ZyptYX/img-19.jpg" // Replace with actual product image URL
            alt="Product"
            className="h-36 object-contain"
          />
        </div>

        {/* Product Price */}
        <div className="mt-3">
          <div className="text-red-500 text-lg font-bold">
            $ 3400.50{' '}
            <span className="text-gray-400 line-through text-sm">$ 2335</span>
          </div>
        </div>

        {/* Product Name */}
        <div className="mt-2 text-sm font-semibold">Faveool ...</div>

        {/* Product Volume */}
        <div className="text-gray-500 text-xs">36 ML</div>

        {/* Ratings */}
        <div className="mt-2">
          <div className="flex items-center text-yellow-400">
            {'★ ★ ★ ★ ★'.split(' ').map((star, index) => (
              <span key={index}>&#9733;</span>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className="mt-4 flex justify-end">
          <button className="bg-pink-200 p-2 rounded-full hover:bg-pink-300 transition">
            <FaCartPlus />
          </button>
        </div>
      </div>
      <div className="border border-green-300 rounded-lg shadow-lg p-4 ">
        {/* Discount Badge */}
        <div className="absolute bg-purple-500 text-white text-xs font-bold rounded-full py-1 px-3 top-2 left-2">
          10%
        </div>

        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src="https://i.ibb.co.com/VWf5yHq/img-23.jpg" // Replace with actual product image URL
            alt="Product"
            className="h-36 object-contain"
          />
        </div>

        {/* Product Price */}
        <div className="mt-3">
          <div className="text-red-500 text-lg font-bold">
            $ 5001.50{' '}
            <span className="text-gray-400 line-through text-sm">$ 2335</span>
          </div>
        </div>

        {/* Product Name */}
        <div className="mt-2 text-sm font-semibold">Haxisold Max ...</div>

        {/* Product Volume */}
        <div className="text-gray-500 text-xs">80 ML</div>

        {/* Ratings */}
        <div className="mt-2">
          <div className="flex items-center text-yellow-400">
            {'★ ★ ★ ★ ★'.split(' ').map((star, index) => (
              <span key={index}>&#9733;</span>
            ))}
          </div>
        </div>

        {/* Add to Cart Button */}
        <div className="mt-4 flex justify-end">
          <button className="bg-pink-200 p-2 rounded-full hover:bg-pink-300 transition">
            <FaCartPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
