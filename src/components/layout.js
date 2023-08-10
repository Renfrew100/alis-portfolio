import * as React from "react"
import { Link } from "gatsby"

import { button } from './button.jsx';
import { Header } from './Header.jsx';
import './header.css';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  
  const[isOpen, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Button = ({type = 'Button', onClick, size, label}) => (
  
    <button type={type} onClick={onClick} className={`Button ${size}`}>
      {label}
    </button>
  );

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
       <div>
        <div><Header /></div>
        <br></br>
        <br></br>
       </div>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
