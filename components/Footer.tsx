export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full p-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>
              © {new Date().getFullYear()} Yibo Zhuang. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/yibozhuang"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              <i class="fab fa-github text-black-600 text-4xl hover:text-gray-600">
              </i>
            </a>
            <a
              href="https://www.linkedin.com/in/yibo-zhuang-94430062"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              <i class="fab fa-linkedin text-blue-600 text-4xl hover:text-blue-800">
              </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
