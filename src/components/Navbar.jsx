import NavigationButton from "./NavigationButton";

function Navbar() {
  return (
    <>
      <div className=" p-4 flex flex-row gap-6 items-center">
        <a href="/">
          <NavigationButton>Home</NavigationButton>
        </a>

        <a href="/about">
          <NavigationButton>People</NavigationButton>
        </a>

        <a href="/testing">
          <NavigationButton>Testing</NavigationButton>
        </a>

        <NavigationButton>Events</NavigationButton>
      </div>
    </>
  );
}

export default Navbar;
