import React, { useEffect, useState } from 'react'

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
    <div className="profile-ccontainer">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="social">
            <a href="#">
              <i className="fab fa-vk"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-github"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div>
            <span>
              Hello, I'm <span className="highlighted-text">Andrey</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1 className="w-100">{currentMessage}</h1>
              <span>
                Knack of builds applications with front and back end operations
              </span>
            </span>
          </div>
          <div>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
