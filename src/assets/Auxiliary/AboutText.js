const specificDate = new Date('2022-04-01')
const today = new Date()
const millisecondsInADay = 86400000

const differenceInMilliseconds = today.getTime() - specificDate.getTime()
export const differenceInDays = Math.floor(
  differenceInMilliseconds / millisecondsInADay
)

export const AboutText =
  "Hello everyone, I am a novice frontend developer with a background in sales. I made a career change a year ago, and I have been self-taught in JavaScript and React since then. During this time, I have been dedicated to learning and mastering these technologies through online courses and personal projects. One of my proudest achievements is a e-commerce website I built using React. It allowed me to apply my understanding of state management, reusable components, and API integration. My experience in sales has taught me the importance of understanding customers' needs, as well as how to effectively communicate and collaborate with a team. I believe that these skills can be applied to the frontend development field as well, where creating a positive user experience is key. I am eager to continue learning and growing as a frontend developer. I am a quick learner, highly motivated and passionate about delivering quality work. I believe that my determination and ability to adapt to new challenges make me a valuable asset to any team. Thank you for considering me for this opportunity. I am confident that my passion for frontend development, combined with my background in sales, will bring a unique perspective and valuable skills to your projects."

export const UrlCv =
  'https://hh.ru/resume_converter/Добрыднев%20Андрей.pdf?hash=b6f8dbbeff05e2948f0039ed1f6f4674613736&type=pdf&hhtmSource=resume&hhtmFrom='
