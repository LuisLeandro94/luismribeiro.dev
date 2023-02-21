import React from "react";

const DownloadLink = ({ text, href, inverted, type }) => {
  return (
    <>
      {!inverted && (
        <a
          name="defaultButton"
          type={type}
          href={href}
          download
          className="text-center block text-xl text-white border-solid border-teal-600 border-2 w-full lg:w-1/3 p-3 my-5 hover:bg-teal-600 transition-colors duration-300"
        >
          {text}
        </a>
      )}

      {inverted && (
        <a
          name="defaultButton"
          type={type}
          href={href}
          download
          className="text-center block text-xl text-teal-600 border-solid border-teal-600 border-2 w-full lg:w-1/3 p-3 my-5 hover:text-white hover:bg-teal-900 hover:border-teal-900 transition-colors duration-300"
        >
          {text}
        </a>
      )}
    </>
  );
};

export default DownloadLink;
