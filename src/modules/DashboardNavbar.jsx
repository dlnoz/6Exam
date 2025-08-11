import { Link } from 'react-router-dom'
import { Billings, DashboardHome, DashboardProfile, DashboardSignIn, DashboardSignUp, Profile, Rtl, Tables } from '../assets/icons'
import { NavbarImg } from '../assets/images'

const DashboardNavbar = () => {
	return (
		<div className="relative mt-[22px] ml-[22px] flex flex-col gap-[15px]">
			<div className="flex gap-[15px] items-center">
				<div className="bg-[#0075FF] w-[30px] h-[30px] rounded-[12px] flex items-center justify-center">
					<DashboardHome/>
				</div>
				<Link className="font-bold text-[10px] text-[#FFFFFF]" to={"/dashboard"}>Dashboard</Link>
			</div>
			<div className="flex gap-[15px] items-center">
				<div className="bg-[#0075FF] w-[30px] h-[30px] rounded-[12px] flex items-center justify-center">
					<Tables/>
				</div>
				<Link className="font-bold text-[10px] text-white" to={"/tables"}>Tables</Link>
			</div>
			<div className="flex gap-[15px] items-center">
				<div className="bg-[#0075FF] w-[30px] h-[30px] rounded-[12px] flex items-center justify-center">
					<Billings/>
				</div>
				<Link className="font-bold text-[10px] text-white" to={"/billing"}>Billing</Link>
			</div>
			<div className="flex gap-[15px] items-center">
				<div className="bg-[#0075FF] w-[30px] h-[30px] rounded-[12px] flex items-center justify-center">
					<Rtl/>
				</div>
				<Link className="font-bold text-[10px] text-white" to={"/rtl"}>RTL</Link>
			</div>
			<span className="text-white mt-[24px] mb-[24px]">ACCOUNT PAGES</span>
			<div className="flex gap-[15px] items-center">
				<div className="bg-[#0075FF] w-[30px] h-[30px] rounded-[12px] flex items-center justify-center">
					<DashboardProfile/>
				</div>
				<Link className="font-bold text-[10px] text-white" to={"/profile"}>Profile</Link>
			</div>
			<div className="flex gap-[15px] items-center">
				<div className="bg-[#0075FF] w-[30px] h-[30px] rounded-[12px] flex items-center justify-center">
					<DashboardSignIn/>
				</div>
				<Link className="font-bold text-[10px] text-white" to={"/signin"}>Sign In</Link>
			</div>
			<div className="flex gap-[15px] items-center">
				<div className="bg-[#0075FF] w-[30px] h-[30px] rounded-[12px] flex items-center justify-center">
					<DashboardSignUp/>
				</div>
				<Link className="font-bold text-[10px] text-white" to={"/signup"}>Sign Up</Link>
			</div>

			<img className="mt-[430px] " src={NavbarImg} alt="Navbar img" width={218} height={169}/>
		</div>
	)
}

export default DashboardNavbar