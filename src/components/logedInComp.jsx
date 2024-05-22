import React from 'react'

function logedInComp() {
  return (
    <div className="w-full h-[400px] shadow-sm bg-welcome bg-cover bg-center flex flex-col justify-center items-end">
        <div className="mr-[30px]">
          <h2
            data-aos="fade-down-right"
            className="text-4xl font-palanquin font-bold"
          >
            Welcome dear<span className="text-coral-sky"> user </span>
          </h2>
          <p className="text-sky-400 font-montserrat">
            <i>
              # explore using our{" "}
              <span className="font-semibold animate-pulse">catagories</span>
            </i>
          </p>
        </div>
      </div>
  )
}

export default logedInComp