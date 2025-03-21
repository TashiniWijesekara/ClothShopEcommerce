import logo from "../assets/logo/LorenzLogo.png";
import prof from "../assets/background/userLogo.png";

const NavbarAdmin = () => {
    return (
        <nav className=' bg-white max_padd_container flex bg-white py-2 ring-1 ring-slate-900/5 relative items-center'>
            {/*<div className='flex-none px-3'>*/}
            {/*    <img src={logo} alt="Logo" height={30} width={80}/>*/}
            {/*</div>*/}

            <div className='flex-grow text-center '>
                <div className='uppercase bold-22 px-3 tracking-widest line-clamp-1 max-xs:bold-18 max-xs:py-2 max-xs:px-1 text-[#69443c]'>
                   <n/>  <n/> <n/> <n/> <n/> Admin Pannel
                </div>
            </div>

            <div className='flex-none px-3'>
                <img src={prof} alt="Profile"  className='h-12 w-12 rounded-full'/>
            </div>
        </nav>
    );
}

export default NavbarAdmin;
