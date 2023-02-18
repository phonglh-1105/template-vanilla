import Footer from "../components/Footer";
import Header from "../components/Header";
const HomePage = () => {
  return /*html*/ `${Header()}
  <main class="tw-container tw-mx-auto tw-my-8">
  <div class="tw-flex">
      <!-- Sidebar -->
      <aside class="tw-w-1/4 tw-pr-8">
        <div class="tw-flex tw-items-center">
            <img class="tw-w-16 tw-h-16 tw-rounded-full tw-mr-4" src="https://via.placeholder.com/150" alt="avatar">
            <h2 class="tw-text-lg tw-font-medium tw-text-gray-900">Le Hong Phong</h2>
        </div>

          <h2 class="tw-text-xl tw-font-bold tw-mb-4">About Me</h2>
          <p class="tw-mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in lectus id magna bibendum semper. Curabitur blandit libero sit amet turpis blandit lacinia.</p>
          <h2 class="tw-text-xl tw-font-bold tw-mb-4">Skills</h2>
          <ul>
              <li class="tw-mb-2"><span class="tw-font-bold">HTML:</span> Advanced</li>
              <li class="tw-mb-2"><span class="font-bold">CSS:</span> Advanced</li>
              <li class="tw-mb-2"><span class="tw-font-bold">JavaScript:</span> Intermediate</li>
              <li class="tw-mb-2"><span class="tw-font-bold">React:</span> Beginner</li>
          </ul>
      </aside>
        <!-- Content -->
        <div class="tw-w-3/4">
            <h2 class="tw-text-xl tw-font-bold tw-mb-4">Latest Work</h2>
            <div class="tw-flex tw-flex-wrap -tw-mx-4">
                <div class="tw-w-full tw-md:w-1/2 lg:tw-w-1/3 tw-px-4 tw-mb-8">
                    <img src="https://via.placeholder.com/640x360" alt="" class="tw-w-full">
                    <h3 class="tw-text-lg tw-font-bold tw-my-2">Project 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in lectus id magna bibendum semper. Curabitur blandit libero sit amet turpis blandit lacinia.</p>
                </div>
                <div class="tw-w-full tw-md:w-1/2 lg:tw-w-1/3 tw-px-4 tw-mb-8">
                    <img src="https://via.placeholder.com/640x360" alt="" class="w-full">
                    <h3 class="tw-text-lg tw-font-bold tw-my-2">Project 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in lectus id magna bibendum semper. Curabitur blandit libero sit amet turpis blandit lacinia.</p>
                </div>
                <div class="tw-w-full tw-md:w-1/2 lg:tw-w-1/3 tw-px-4 tw-mb-8">
                    <img src="https://via.placeholder.com/640x360" alt="" class="w-full">
                    <h3 class="tw-text-lg tw-font-bold tw-my-2">Project 3</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in lectus id magna bibendum semper. Curabitur blandit libero sit amet turpis blandit lacinia.</p>
                </div>
            </div>
        </div>
    </div>
</main>
  ${Footer()}
  `;
};
export default HomePage;
