import Button from "./Button";
import CollieLogo from '../assets/CollieLogo.png'

const Nav = () => {
  return (
    <nav className="flex justify-between items-center h-24 px-12 bg-dark font-bold text-lg flex-1 font-custom">
      <div className="flex items-center justify-between">
        <figure className="px-4">
          <img src={CollieLogo}
          width={50}
          height={50}
           alt="Collie Logo" />
        </figure>
        <div className="">
          <h1 className="tracking-widest text-color2">THE COLLIE KENNEL</h1>
          <p className="tracking-wider text-light">The <span className="text-color1">Smart Way</span> To Adopt</p>
        </div>
      </div>

      <ul className="flex gap-12 max-md:hidden">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="">Adopt</a>
        </li>
        
        <li>
          <a href="">Contact</a>
        </li>
      </ul>

      <Button text="Donate" />
    </nav>
  );
};

export default Nav;
