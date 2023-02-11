import React, { useEffect, useState } from 'react'
import hero from '../assets/images/hero.png'

const messages = [
  'React/Redux Dev💥',
  'Native JavaScript Dev✅',
  'NodeJs/Express Dev💻',
]

function Home() {
  const [currentMessage, setCurrentMessage] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    let message = messages[currentIndex]
    let i = 0
    const typingInterval = setInterval(() => {
      setCurrentMessage(message.substring(0, i++))
      if (i > message.length) {
        clearInterval(typingInterval)
        setTimeout(() => {
          setCurrentIndex((currentIndex + 1) % messages.length)
        }, 500)
      }
    }, 100)

    return () => {
      clearInterval(typingInterval)
    }
  }, [currentIndex])

  return (
    <section id="home" className="min-h-screen flex py-10 items-center">
      <div className="flex-1 flex items-center md:flex-row flex-col justify-center h-full">
        <img
          src={hero}
          alt=""
          className="md:w-1/2 rounded-3xl object-cover sm:w-1/2 m-5"
        />
        <div className="flex-1">
          <div className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600">Hello!</span>

            <span> My name is Andrey</span>
          </div>
          <div className="profile-details-role">
            <h1 className="md:text-3xl md:text-left text-2xl md:leading-normal leading-10 h-10 my-4 text-center">
              {currentMessage}
            </h1>
          </div>
          <button className="btn-primary my-4 align-middle">Contact me</button>

          <div className="text-3xl flex items-center md:justify-start justify-between">
            <a
              className="text-gray-600 hover:text-white cursor-pointer mr-5"
              href="https://vk.com/dobriy__man"
              target={'_blank'}
              rel="noreferrer"
            >
              <i className="fab fa-vk"></i>
            </a>
            <a
              className="text-gray-600 hover:text-white cursor-pointer mr-5"
              href="https://www.facebook.com/profile.php?id=100008393264369"
              target={'_blank'}
              rel="noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              className="text-gray-600 hover:text-white cursor-pointer mr-5"
              href="https://github.com/AndrewDobriy"
              target={'_blank'}
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="text-gray-600 hover:text-white cursor-pointer  "
              href="https://www.instagram.com/dobriy__man/"
              target={'_blank'}
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
