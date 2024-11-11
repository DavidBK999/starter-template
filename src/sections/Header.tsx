export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#Hero" className="nav-item">
          Start
        </a>
        <a href="#Projects" className="nav-item">
          Projekte
        </a>

        <a href="#About" className="nav-item">
          Über
        </a>
        <a
          href="#Contact"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Kontakt
        </a>
      </nav>
    </div>
  );
};
