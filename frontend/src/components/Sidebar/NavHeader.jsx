import logo from '../../assets/spending.png';

const NavHeader = () => {
    return (
        <div className="sidebar-header">
            <img src={logo} alt="Expense Tracker logo" />
            <h1>Expense Tracker</h1>
        </div>
    );
};

export default NavHeader;