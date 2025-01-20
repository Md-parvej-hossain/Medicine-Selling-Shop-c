import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="py-24 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        {/* Logo */}
        <div className="flex items-center justify-between py-5">
          <h2 className="text-3xl font-bold text-primary mb-4">
            About Medicine Selling Shop
          </h2>

          <Link to={'/'}>
            <button className="btn btn-ghost bg-green-500">View product</button>
          </Link>
        </div>

        {/* Description Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-primary">
            Who We Are
          </h3>
          <p className="text-gray-700 mb-4">
            At <strong>Medicine Selling Shop</strong>, we are committed to
            providing accessible and affordable healthcare solutions to people
            from all walks of life. We offer a wide range of prescription and
            over-the-counter medicines, ensuring quality and reliability in
            every product we deliver.
          </p>
          <p className="text-gray-700 mb-4">
            Our mission is to simplify healthcare by bringing it to your
            fingertips. With a focus on customer satisfaction, we ensure fast
            delivery, excellent customer service, and products that meet
            stringent quality standards.
          </p>
          <p className="text-gray-700">
            Join thousands of satisfied customers who trust{' '}
            <strong>Medicine Selling Shop</strong>
            as their go-to online pharmacy. Your health and well-being are our
            priority.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md my-10">
          <h3 className="text-2xl font-semibold mb-4 text-primary">
            Our Service
          </h3>
          <p className="text-gray-700 mb-4">
            At <strong>Medicine Selling Shop</strong>, we are committed to
            providing accessible and affordable healthcare solutions to people
            from all walks of life. We offer a wide range of prescription and
            over-the-counter medicines, ensuring quality and reliability in
            every product we deliver.
          </p>
          <p className="text-gray-700 mb-4">
            Our mission is to simplify healthcare by bringing it to your
            fingertips. With a focus on customer satisfaction, we ensure fast
            delivery, excellent customer service, and products that meet
            stringent quality standards.
          </p>
          <p className="text-gray-700">
            Join thousands of satisfied customers who trust{' '}
            <strong>Medicine Selling Shop</strong>
            as their go-to online pharmacy. Your health and well-being are our
            priority.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4 text-primary">
            Our Product
          </h3>
          <p className="text-gray-700 mb-4">
            At <strong>Medicine Selling Shop</strong>, we are committed to
            providing accessible and affordable healthcare solutions to people
            from all walks of life. We offer a wide range of prescription and
            over-the-counter medicines, ensuring quality and reliability in
            every product we deliver.
          </p>
          <p className="text-gray-700 mb-4">
            Our mission is to simplify healthcare by bringing it to your
            fingertips. With a focus on customer satisfaction, we ensure fast
            delivery, excellent customer service, and products that meet
            stringent quality standards.
          </p>
          <p className="text-gray-700">
            Join thousands of satisfied customers who trust{' '}
            <strong>Medicine Selling Shop</strong>
            as their go-to online pharmacy. Your health and well-being are our
            priority.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
