import React from 'react'
import CV from '../assets/cv.pdf';

const CTA = () => {
  return (
    <div className="mt-8 flex gap-5 justify-center">
      <a href={CV} download className="bg-transparent border border-indigo-600 hover:bg-indigo-600 hover:text-VampireBlack px-2 py-2 rounded-lg text-sm text-Goldenrod ease-linear duration-300">Download CV</a>
      <button onClick={() => window.fullpage_api.moveTo(7)} className="bg-GoldenPoppy px-2 py-2 rounded-lg text-sm text-VampireBlack hover:text-Goldenrod hover:bg-transparent hover:border ease-linear duration-300">
        Let's Talk
      </button>
    </div>
  )
}

export default CTA