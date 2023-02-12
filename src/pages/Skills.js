import React from 'react'

function Skills() {
  const skills = [
    {
      logo: 'fa-brands fa-html5',
      level: 'Advance',
      count: 80,
    },
    {
      logo: 'fa-brands fa-css3-alt',
      level: 'Advance',
      count: 80,
    },
    {
      logo: 'fa-brands fa-js',
      level: 'Advance',
      count: 80,
    },
    {
      logo: 'fa-brands fa-react',
      level: 'Intermediate',
      count: 60,
    },
    {
      logo: 'fa-brands fa-node',
      level: 'Beginner',
      count: 40,
    },
  ]
  return (
    <section id="skills" className="py-10 bg-gray-800 relative ">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center my-12 gap-5 flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-cyan-600 relative min-w-[8rem] max-w-[16rem] bg-gray-900 p-5 rounded-xl"
            >
              <div
                style={{
                  background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                }}
                className="w-32 h-32 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                  <i class={skill.logo}></i>
                </div>
              </div>
              <div className="text-2xl mt-3">{skill.level}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
