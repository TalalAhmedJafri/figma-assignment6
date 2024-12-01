import Link from "next/link";
export default function Header() { 
    return (
        <div >
          <div className="mobile:max xl:block">
            <div className="flex ">
             <div className="bg-Header text-black flex justify-start items-center space-x-8 pl-28 align-middle p-5 w-1/2 ">
                <h1>Phone Number: <a href="tel:956 742 455 678">956 742 455 678</a></h1>
                <h1 className="text-divider">|</h1>
                <h1>Email: <a href="mailto:info@ddsgnr.com">info@ddsgnr.com</a></h1>
             </div>

        <div className="w-1/2 bg-Header flex justify-end items-center space-x-8 pr-28">
                <button><img src="images/Facebook.png"/></button>
                <button><img src="images/Instagram.png"/></button>
                <button><img src="images/Twitter.png"/></button>
                <button><img src="images/LinkedIn.png"/></button>
                
                
            </div>
            </div>
         </div>
      <div className="bg-Header text-black flex justify-center items-center">
       <img src="images/frame.png"></img>
        <h1 className="text-4xl font-bold mr-16">Ddsgnr</h1>
        <nav>
        <ul className='flex justify-center items-center space-x-8 text-2xl bg-White m-3 align-middle'>
        <li >
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="../portfolio">Courses</Link>
        </li>
        <li>
          <Link href="../about">Services</Link>
        </li>
        <li>
          <Link href="../contact">Achievement</Link>
        </li>
        <li>
          <Link href="../contact">About Us</Link>
        </li>
        <li>
          <Link href="../contact">Testimonial</Link>
        </li>
        <button className="border-solid border-black border-2 rounded-lg px-3 py-2 ">Login</button>
        <button className="border-solid bg-black text-white border-2 rounded-lg px-3 py-2 ">Sign Up</button>
        </ul> 

      </nav>
      <nav className="hidden mobile:block">
        <button><img src="images/Menu.png"/></button>
      </nav>
      </div>
      
      </div>
    )
  }