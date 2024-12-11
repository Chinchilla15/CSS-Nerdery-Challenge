interface NavItemProps {
  iconClass: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ iconClass, label }) => (
  <li className="nav-list-item">
    <span className={iconClass}></span>
    <p>{label}</p>
  </li>
);

export default NavItem;
