import NavHeader from "./NavHeader.jsx";
import NavButton from "./NavButton.jsx";
import NavFooter from "./NavFooter.jsx";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <NavHeader />
            <NavButton id="expenses_btn">Expenses</NavButton>
            <NavButton id="statistics_btn">Statistics</NavButton>
            <NavButton id="settings_btn">Settings</NavButton>
            <hr />
            <NavFooter />
        </div>
    )
}

export default Sidebar;
