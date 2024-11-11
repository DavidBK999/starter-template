import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[550px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container">
        <div className="border-t border-white/15 py-6 text-sm flex flex-col items-center gap-2">
          <a
            href="https://www.linkedin.com/in/david-köberl-b18447326"
            className="inline-flex items-center gap-1.5 font-semibold z-50"
          >
            LinkedIn
            <span>
              <ArrowUpRightIcon className="size-4" />
            </span>
          </a>
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>
          <nav className="flex flex-col items-center gap-8 mb-2 md:mb-6 lg:mb-8"></nav>
        </div>
      </div>
    </footer>
  );
};
