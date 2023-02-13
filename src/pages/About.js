import React from 'react'
import {
  AboutText,
  differenceInDays,
  UrlCv,
} from '../assets/Auxiliary/AboutText'
import aboutImg from '../assets/images/Saly-13.png'

function About() {
  const info = [
    { text: 'Days Experience', count: differenceInDays },
    //В перспективе можно добавить разные цифры о себе
  ]
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 mx-auto">
          <div className="">
            <div className="text-gray-300 my-3 ">
              <p className="text-justify leading-7">
                {AboutText}
                <br />
                I've loved building things for web and been working with{' '}
                <span className="bg-line">
                  JavaScript (ES6+), HTML & CSS, React, Node.js recently.
                </span>
              </p>
              <div>
                <div className="flex mt-10 items-center justify-around gap-7">
                  {info.map((content) => (
                    <div key={content.text}>
                      <h3 className="md:text-4xl text-2xl font-semibold text-white">
                        {content.count} <span className="text-cyan-600">+</span>
                      </h3>
                      <span className="md:text-base text-sm">
                        {content.text}
                      </span>
                    </div>
                  ))}
                  <a href={UrlCv}>
                    <button className="btn-primary ">Download CV</button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 md:mt-0 flex jusctify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm levitation">
              <img src={aboutImg} alt="" className="w-full object-cover " />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
