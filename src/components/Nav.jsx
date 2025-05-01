import CollieLogo from '../assets/CollieLogo.png'
import { Link } from 'react-router-dom';

// async function fetchData() {
//   console.log('1');

//   setTimeout(() => {
//     console.log('2');
//   }, 0);

//   await Promise.resolve();
//   console.log('3');

//   await new Promise((resolve) => setTimeout(resolve, 0));
//   console.log('4');
// }

// fetchData();
// console.log('5');

// const obj = { user: { name: 'John'} };

// const { user } = obj;
// user.name = 'Jane';

// console.log(obj.user.name);

// const copy = { ...obj };
// copy.user.name = 'Jake';

// console.log(obj.user.name);

// const p1 = new Promise((_, reject) =>
// setTimeout(() => reject('A'), 100)
// );

// const p2 = new Promise((resolve) =>
// setTimeout(() => resolve('B'), 300)
// );

// const p3 = new Promise((_, reject) =>
// setTimeout(() => reject('C'), 400)
// );

// const p4 = new Promise((resolve) =>
// setTimeout(() => resolve('D'), 200)
// );

// Promise.any([p1, p2, p3, p4])
// .then((value) => {
//   console.log('Result:', value);
// })
// .catch((err) => {
//   console.log('Error', err.message);
// });




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
