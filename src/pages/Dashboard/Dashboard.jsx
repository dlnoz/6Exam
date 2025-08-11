import { DashboardMain1, UILogo } from '../../assets/images'
import "./index.css"
import DashboardNavbar from '../../modules/DashboardNavbar'

const Dashboard = () => {
	return (
		<div className="dashboard-bg pt-[10px] pb-[20px]">
			<div className="dashboard-navbar w-[264px] h-[1135px] rounded-[20px] ml-[10px]">
				<div className="pt-[36px] px-[64px]">
					<img src={UILogo} alt="Dashboard logo" />
					<span className="navbar-line"></span>
				</div>
				<div>
					<DashboardNavbar/>
				</div>
			</div>

			<div className="w-[80%]">
				<div><DashboardMain1/></div>
			</div>
		</div>
	)
}

export default Dashboard