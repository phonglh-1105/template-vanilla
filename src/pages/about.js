import Footer from "../components/Footer";
import Header from "../components/Header";
const About = () => {
  return /*html*/ `
        ${Header()}
        <main tw-bg-gray-100>
        <div class="tw-container tw-mx-auto tw-p-8">
          <div class="tw-flex tw-justify-center tw-items-center">
            <img
              class="tw-w-64 tw-h-64 tw-object-cover tw-rounded-full tw-border-4 tw-border-white"
              src="https://via.placeholder.com/300x300"
              alt="Profile Picture"
            />
          </div>
          <h1 class="tw-text-4xl tw-font-bold tw-mt-8 tw-text-center">About Me</h1>
          <div class="tw-flex tw-justify-center tw-mt-6">
            <a
              href="https://www.facebook.com/your-facebook-profile"
              target="_blank"
              rel="noopener noreferrer"
              class="tw-mr-4"
            >
              <i
                class="tw-text-gray-500 tw-text-3xl tw-transition tw-duration-300 hover:tw-text-blue-500 fab fa-facebook"
              ></i>
            </a>
            <a
              href="https://www.instagram.com/your-instagram-profile"
              target="_blank"
              rel="noopener noreferrer"
              class="tw-mr-4"
            >
              <i
                class="tw-text-gray-500 tw-text-3xl tw-transition tw-duration-300 hover:tw-text-pink-500 fab fa-instagram"
              ></i>
            </a>
            <a
              href="https://twitter.com/your-twitter-profile"
              target="_blank"
              rel="noopener noreferrer"
              class="tw-mr-4"
            >
              <i
                class="tw-text-gray-500 tw-text-3xl tw-transition tw-duration-300 hover:tw-text-blue-500 fab fa-twitter"
              ></i>
            </a>
            <a href="mailto:phonghngle@gmail.com" class="tw-mr-4">
              <i
                class="tw-text-gray-500 tw-text-3xl tw-transition tw-duration-300 hover:tw-text-red-500 far fa-envelope"
              ></i>
            </a>
            <a
              href="https://www.linkedin.com/in/your-linkedin-profile"
              target="_blank"
              rel="noopener noreferrer"
              class="tw-mr-4"
            >
              <i
                class="tw-text-gray-500 tw-text-3xl tw-transition tw-duration-300 hover:tw-text-blue-500 fab fa-linkedin"
              ></i>
            </a>
            <a
              href="https://github.com/phonglh-1105"
              target="_blank"
              rel="noopener noreferrer"
              class="tw-mr-4"
            >
              <i
                class="tw-text-gray-500 tw-text-3xl tw-transition tw-duration-300 hover:tw-text-gray-700 fab fa-github"
              ></i>
            </a>
            <a
              href="https://www.youtube.com/your-youtube-channel"
              target="_blank"
              rel="noopener noreferrer"
              class="tw-mr-4"
            >
              <i
                class="tw-text-gray-500 tw-text-3xl tw-transition tw-duration-300 hover:tw-text-red-500 fab fa-youtube"
              ></i>
            </a>
          </div>
          <div class="tw-bg-white tw-p-8 tw-rounded-lg tw-shadow-lg tw-mt-8">
            <p class="tw-text-lg tw-mb-4">
              Hi, my name is [Le Hong Phong]. I am a [your profession] based in [your
              location]. In my free time, I enjoy [your hobbies or interests].
            </p>
            <p class="tw-text-lg tw-mb-4">
              I have [your years of experience] years of experience working in [your
              industry or field]. Some of my skills include:
            </p>
            <ul class="tw-list-disc tw-list-inside tw-text-lg tw-mb-4">
              <li>[Skill 1]</li>
              <li>[Skill 2]</li>
              <li>[Skill 3]</li>
              <li>[Skill 4]</li>
            </ul>
            <p class="tw-text-lg">
              Feel free to
              <a href="mailto:phonglhph19872@fpt.edu.vn">contact me</a> if you'd like
              to get in touch!
            </p>
          </div>
        </div>
      </main>
      ${Footer()}
    `;
};
export default About;
