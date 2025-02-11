import CollieLogo from '../assets/CollieLogo.png'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="flex justify-between items-center h-24 px-12 bg-dark font-bold text-lg flex-1 font-custom">
      <div className="flex items-center justify-between">
        <Link to='/'>
          
            <figure className="px-4">
              <img src={CollieLogo}
              width={50}
              height={50}
               alt="Collie Logo" />
            </figure>
          
        </Link>
        <div>
          <h1 className="tracking-widest text-color2">THE COLLIE KENNEL</h1>
          <p className="tracking-wider text-light">The <span className="text-color1 ">Smart Way</span> To Adopt</p>
        
        </div>
      </div>

      <ul className="flex gap-12 max-md:hidden text-color1 ">
        <li>
          <Link className="hover:text-color2" to="/">Home</Link>
        </li>
        <li>
          <Link className="hover:text-color2" to="/pets">Adopt</Link>
        </li>
        
        <li>
          <a className="hover:text-color2 cursor-not-allowed" >Contact</a>
        </li>
      </ul>
      <div className='max-md:block md:hidden text-light'>
        <h1 className='hover:text-color1 cursor-not-allowed'>Menu</h1>
      </div>
        
   </nav>
  );
};

export default Nav;
