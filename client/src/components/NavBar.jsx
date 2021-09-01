const NavBar = (props) => {
  const { burger, searchbar, profile } = props;

  const search = burger && search[navigator];

  console.log(search, burger, searchbar);
  const renderNavbar = () => {
    const keys = Object.keys(searchbar);
    return (keys.map = (keys, index) => {
      const searchbar = searchbar[keys];
    });
  };
};

export default NavBar;
