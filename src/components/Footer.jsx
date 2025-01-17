const Footer = () => {
  return (
    <div>
      <footer className="footer bg-base-300 text-base-content p-10">
        <nav>
          <h6 className="footer-title">Hotline</h6>
          <a className="link link-hover">📞 880 9617 111 555</a>
          <a className="link link-hover">📞 880 17 01 290 890</a>
          <a className="link link-hover">📞 880 19 33 33 66 55</a>
          <a className="link link-hover">
            {' '}
            Helpline Operation(Sat-Thurs): 10:00 AM - 07:00 PM
          </a>
          <a className="link link-hover">
            🛵 Delivery Days/Hours: Everyday / 10:00 AM - 09:00 PM
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Quick Links</h6>
          <a className="link link-hover"> How To Order</a>
          <a className="link link-hover">Partners</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact Us</a>
        </nav>
        <nav>
          <h6 className="footer-title"> Featured links</h6>
          <a className="link link-hover">Medicines Price in BD </a>
          <a className="link link-hover"> Diabetic Care </a>
          <a className="link link-hover">Sanitary Pad</a>
          <a className="link link-hover">Condoms</a>
          <a className="link link-hover">Food Supplements</a>
          <a className="link link-hover">Diapers</a>
        </nav>

        <nav>
          <h6 className="footer-title"> Address</h6>
          <a className="link link-hover"> 📍 Mohakhali DOHS,Dhaka </a>
          <a className="link link-hover"> 1206 </a>
          <a className="link link-hover">📧 Email:</a>
          <a className="link link-hover"> info@epharma.com.bd</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
