import React from "react";

function NavBar(props) {
  const links = ["home", "about", "projects"];

  const linkItem = links.map((link) =>{
    return <a key={link} href={`#${link}`} >{link}</a>
  });

  return (<nav>
  {linkItem}
  </nav>);
}

export default NavBar;
