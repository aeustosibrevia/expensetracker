const NavButton = (props) => {
    const {children, id} = props;

    return (
        <button className="nav-button" id={id}>{children}</button>
    )
}

export default NavButton;
