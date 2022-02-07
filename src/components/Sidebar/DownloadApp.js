import { Icon } from "Icons";
import React from "react";

const DownloadApp = () => {
  return (
    <a
      href="#"
      className="h-10 text-sm font-semibold text-link hover:text-white flex items-center flex-shrink-0 px-6 gap-x-4"
    >
      <Icon name={"download"} size={20} />
      Uygulamayı Yükle
    </a>
  );
};

export default DownloadApp;
