import CollieLogo from "../assets/CollieLogo.png";
const Footer = () => {
  return (
    <footer className="bg-color2">
      <div className="flex flex-col items-center justify-center">
        <figure className="py-8 flex flex-col justify-center items-center">
          <img src={CollieLogo} width={50} height={50} alt="" />
          <h1 className="text-light tracking-wider">
            The <span className="text-color1">Smart Way</span> To Adopt
          </h1>
        </figure>
        <div className="flex gap-40 pb-6 text-center ">
          <ul>
            <h1 className="text-lg text-color1">Ways to Help</h1>
            <li>Adopt</li>
            <li>Donate</li>
            <li>Foster</li>
            <li>Volunteer</li>
          </ul>
          <ul>
            <h1 className="text-lg text-color1">Adopt</h1>
            <li>Services</li>
            <li>Services</li>
            <li>Services</li>
            <li>Services</li>
          </ul>
          <ul>
            <h1 className="text-lg text-color1">Contact</h1>
            <li>Services</li>
            <li>Services</li>
            <li>Services</li>
            <li>Services</li>
          </ul>
        </div>
        <ul className="flex gap-8 pb-6 text-light ">
          <li>
            <a href="">Social Link</a>
          </li>
          <li>
            <a href="">Social Link</a>
          </li>
          <li>
            <a href="">Social Link</a>
          </li>
        </ul>
        <p>CopyRight 2024 All Rights Reserved @ The Collie Kennel</p>
      </div>
    </footer>
  );
};

export default Footer;
