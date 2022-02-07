import React from "react";

const Playlist = () => {
  return (
    <nav className="mx-6 mt-2 pt-2 flex-auto overflow-auto border-t border-white border-opacity-20  ">
      <ul>
        {new Array(40).fill(
          <li>
            <a
              href="#"
              className="text-s text-link hover:text-white flex h-8 items-center"
            >
              22. Çalma Listesi
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Playlist;
