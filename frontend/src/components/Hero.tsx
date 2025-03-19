import { MdOutlineLocalOffer } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Hero = () => {
    return (
        <section className="relative bg-hero bg-no-repeat h-screen w-full">
            <div className="mx-auto max-w-[1540px] px-6 lg:px-40 relative top-32 xs:top-52">
                <h1 className="h1 capitalize max-w-[35rem] "> The
                    <span className="text-secondary "> Lorenz </span> Clothing Brand</h1>
                <p className="text-gray-50 regular-17 mt-6 max-w-[30rem]">
                    Where fashion meets sophistication.
                    Our collection reflects our commitment to both fashion
                    and the environment. Join us in celebrating this exciting
                    launch and discover your new favorite outfits today.
                </p>
                <div className="flexStart !items-center gap-x-4 my-5">

                </div>
                <div className="max-xs:flex-col flex gap-2">
                    <NavLink to={""} className={"btn_dark_rounded flexCenter"}>
                        Shop now
                    </NavLink>
                    <NavLink to={""} className={"btn_dark_rounded flexCenter gap-x-2"}>
                        <MdOutlineLocalOffer className="text-2xl" />
                        Offers
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default Hero;
