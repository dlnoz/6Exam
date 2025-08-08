

const Login = () => {
  return (
    <div className="flex justify-between h-[100vh]">
        <div className="w-[50%] h-[100vh] login-bg">
          <div className="flex flex-col items-center mt-[480px]">
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
                <input className="blur-input w-[350px] h-[50px] text-[14px]" type="text" placeholder="Your email address"/>
              </form>
              <form className="flex flex-col gap-[8px]">
                <label className="text-white font-normal text-[14px]" htmlFor="password">Password</label>
                <input className="blur-input w-[350px] h-[50px] text-[14px]" type="text" placeholder="Your password"/>
              </form>
            </div>
            <div className="flex flex-col mt-[35px] gap-[22px]">
              <button className="w-[350px] h-[45px] bg-[#0075FF] text-white rounded-[12px] font-bold text-[14px]">SIGN IN</button>
              <a href="#" className="text-[#A0AEC0] text-center font-normal text-[14px]">Don't have an account? <span className="text-white font-bold text-[14px]">Sign up</span></a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login