export function Navbar() {
  return (
    <nav className="bg-[#45a9ec] shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div>
            <i class="fa-solid fa-code text-black text-2xl">
            </i>
            <a href="/" className="font-bold text-2xl m-3">Yibo Zhuang</a>
          </div>
          <ul className="flex space-x-4">
            <li>
              <button
                type="button"
                className="px-3 py-2 rounded-md bg-[#1f41b1] text-white"
              >
                Home
              </button>
            </li>
            <li>
              <a target="_blank" href="/pdf/resume.pdf">
                <button
                  type="button"
                  className="px-3 py-2 rounded-md text-black hover:bg-blue-200"
                >
                  Resume
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
