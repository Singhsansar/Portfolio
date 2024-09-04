import React from 'react'
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex text-xl gap-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <i className="fi fi-brands-facebook"></i>
          </a>
          <span className="bannerIcon">
            <i className="fi fi-brands-twitter"></i>
          </span>
          <span className="bannerIcon">
            <i className="fi fi-brands-linkedin"></i>
          </span>
          <span className="bannerIcon">
            <i className="fi fi-brands-github"></i>
          </span>
        </div>
      </div>

    </div>
  )
}
export default Media