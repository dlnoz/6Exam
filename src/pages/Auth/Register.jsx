import { Link } from 'react-router-dom'
import {Dashboard, Apple, Facebook, Google, Profile, SignUp, SignIn } from '../../assets/icons'
import Logo from "../../assets/images/UILogo.png"


const Register = () => {
  return (
    <div className="flex justify-between relative">
      
      <div className="flex bg-header justify-between items-center mx-auto liner w-[998px] p-[20px] absolute top-[20px] right-0 left-0 !border-[#757A8C] rounded-xl">
        <img src={Logo} alt="logo img" />
        <div className=" flex gap-[30px]">
          <div className="flex gap-[5px]">
            <Dashboard />
            <Link className="font-bold text-[10px] text-[#FFFFFF]" to={"/dashboard"}>DASHBOARD</Link>
          </div>
          <div className="flex gap-[5px]">
            <Profile />
            <Link className="font-bold text-[10px] text-[#FFFFFF]" to={"/profile"}>PROFILE</Link>
          </div>
          <div className="flex gap-[5px]">
            <SignUp />
            <Link className="font-bold text-[10px] text-[#FFFFFF]" to={"/sign up"}>SIGN UP</Link>
          </div>
          <div className="flex gap-[5px]">
            <SignIn />
            <Link className="font-bold text-[10px] text-[#FFFFFF]" to={"/sign in"}>SIGN IN</Link>
          </div>
        </div>
        <button className="w-[150px] py-[10px] rounded-2xl bg-[#0075FF] text-[10px] font-bold text-[#FFFFFF]">Free Download</button>
      </div>

      <div className="w-[50%] register-bg">
        <div className="flex flex-col items-center mt-[450px]">
          <h2 className="text-white font-normal text-[20px] tracking-[.25em]">INSPIRED BY THE FUTURE:</h2>
          <h2 className="text-white font-bold text-[36px] tracking-[.25em]">THE VISION UI DASHBOARD</h2>
        </div>
      </div>
      <div className="w-[50%] bg-[#0F123B]">
        <div className="w-[333px] ml-[110px] mt-[195px] mb-[55px]">
          <h2 className="text-white font-bold text-[30px] w-[450px] text-center">Welcome!</h2>
          <p className="text-white font-normal text-[18px] w-[450px] text-center">Use these awesome forms to login or create new account in your project for free.</p>
        </div>
        <div className="w-[452px] h-[760px] border-[2px] border-white ml-[110px] mb-[56px] rounded-[30px]">
          <h2 className="text-white font-bold text-[18px] flex justify-center mt-[45px] mb-[24px]">Register with</h2>
          <div className="w-[350px] h-[100px] flex ml-[95px] gap-[15px]">
            <div className="w-[75px] h-[75px] border-white border-[2px] rounded-[20px] flex items-center justify-center hover:w-[80px] hover:h-[77px] duration-300"><Facebook/></div>
            <div className="w-[75px] h-[75px] border-white border-[2px] rounded-[20px] flex items-center justify-center hover:w-[80px] hover:h-[77px] duration-300"><Apple/></div>
            <div className="w-[75px] h-[75px] border-white border-[2px] rounded-[20px] flex items-center justify-center hover:w-[80px] hover:h-[77px] duration-300"><Google/></div>
          </div>
          <span className="text-white font-bold text-[18px] flex justify-center mt-[15px] mb-[20px]">or</span>
          <div className="flex flex-col ml-[50px] gap-[30px]">
            <form className="flex flex-col gap-[8px]">
              <label className="text-white font-normal text-[14px]">Name</label>
              <input className="blur-input w-[350px] h-[50px] border-[2px] rounded-[20px] font-normal" type="text" placeholder="Your full name"/>
            </form>
            <form className="flex flex-col gap-[8px]">
              <label className="text-white font-normal text-[14px]">Email</label>
              <input className="blur-input w-[350px] h-[50px] border-[2px] rounded-[20px]" type="text" placeholder="Your email address"/>
            </form>
            <form className="flex flex-col gap-[8px]">
              <label className="text-white font-normal text-[14px]">Password</label>
              <input className="blur-input w-[350px] h-[50px] border-[2px] rounded-[20px]" type="text" placeholder="Your password"/>
            </form>
            <span className="text-white text-[12px] font-normal">Remember me</span>
            <div className="w-[350px] flex flex-col gap-[22px]">
              <button className="text-white text-[10px] font-bold border-[2px] border-[#0075FF] bg-[#0075FF] w-[350px] h-[50px] rounded-[12px] hover:bg-transparent hover:border-[2px] hover:border-[#0075FF] hover:text-[#0075FF] hover:w-[355px] duration-300">SIGN UP</button>
              <p className="text-[#A0AEC0] mx-auto">Already have an account? <span className="text-white">Sign in</span></p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[9px] w-[610px]">
          <p className="ml-[110px] text-[#A0AEC0]">@ 2021, Made with ❤️ by Simmmple & Creative Tim for a better web</p>
          <div className="flex gap-[46px] ml-[110px] justify-center mb-[135px]">
            <span className="text-[#A0AEC0]">Marketplace</span>
            <span className="text-[#A0AEC0]">Blog</span>
            <span className="text-[#A0AEC0]">License</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register