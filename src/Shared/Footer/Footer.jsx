import { FaBook } from "react-icons/fa";


const Footer = () => {
    return (
        <div className="bg-[#ff724f] ">
            <footer className="footer p-10 text-white  bg-[#032f40] ">
                <aside>
                    <FaBook className="text-3xl bg-[#ff724f] "></FaBook>
                    <p className="text-base font-medium">E-Learn<br />Providing reliable tech since 1992</p>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <h2 className="text-base font-semibold text-center">© Right 2024</h2>
        </div>
    );
};

export default Footer;