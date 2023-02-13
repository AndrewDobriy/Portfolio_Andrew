import React from 'react'

function Contact() {
  return (
    <section id="contact" className="py-10 px-3 text-white ">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <h4 className="text-2xl my-6 mx-auto max-w-lg">
          I'm currently looking for opportunities, my inbox is always open
          whether for hiring me or just to talk. I'll answer your email!
        </h4>
        <a
          href="mailto:an.dobriy@mail.ru"
          className="text-white text-3xl cursor-pointer mt-3 text-lg bg-line font-bold"
        >
          Let's get in touch!
        </a>
      </div>
    </section>
  )
}

export default Contact
