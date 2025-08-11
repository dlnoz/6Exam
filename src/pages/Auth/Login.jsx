import { Link } from 'react-router-dom'
import { Dashboard, Profile, SignIn, SignUp } from "../../assets/icons"
import Logo from "../../assets/images/UILogo.png"
const Login = () => {
  return (
    <div className='relative'>
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
      <div className="flex justify-between h-[100vh]">
      <div className="w-[50%] h-[100vh] login-bg">
        <div className="flex flex-col items-center mt-[430px]">
          <span className="text-white font-normal text-[20px] tracking-[.25em]">INSPIRED BY THE FUTURE:</span>
          <span className="text-white font-bold text-[36px] tracking-[.25em]">THE VISION UI DASHBOARD</span>
        </div>
      </div>

      <div className="w-[50%] bg-[#0F123B]">
        <div className="mt-[280px] ml-[100px] w-[355px]">
          <div>
            <h2 className="text-white font-bold text-[30px]">Nice to see you!</h2>
            <p className="text-[#A0AEC0] font-normal text-[14px]">Enter your email and password to sign in</p>
          </div>
          <div className="mt-[35px] flex flex-col gap-[30px]">
            <form className="flex flex-col gap-[8px]">
              <label className="text-white font-normal text-[14px]" htmlFor="email">Email</label>
              <input className="blur-input w-[350px] h-[50px] text-[14px]" type="text" placeholder="Your email address" required/>
            </form>
            <form className="flex flex-col gap-[8px]">
              <label className="text-white font-normal text-[14px]" htmlFor="password">Password</label>
              <input className="blur-input w-[350px] h-[50px] text-[14px]" type="text" placeholder="Your password" required/>
            </form>
          </div>
          <div className="flex flex-col mt-[35px] gap-[22px]">
            <button className="w-[350px] h-[45px] bg-[#0075FF] text-white rounded-[12px] font-bold text-[14px]">SIGN IN</button>
            <a href="#" className="text-[#A0AEC0] text-center font-normal text-[14px]">Don't have an account? <span className="text-white font-bold text-[14px]">Sign up</span></a>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Login