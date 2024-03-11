import { Link } from "react-router-dom";

export const DisplayCard = ({
  link,
  displayImg,
  category,
  projectTitle,
  projectDescription,
  githubLink,
}) => {
  return (
    <div class="w-[300px] h-[450px] rounded-md border m-4 flex flex-col">
      <div>
        <Link to={link}>
          <img
            src={displayImg}
            alt="Laptop"
            class="h-[200px] w-full rounded-md object-cover"
          />
        </Link>
      </div>

      <div class="p-4 flex flex-col justify-between h-full">
      <div>
        <h1 class="text-lg text-white font-semibold">{projectTitle}</h1>
      </div>
      <div>
        <p class="mt-3 text-sm text-gray-400">{projectDescription}</p>
      </div>
      <div>
        <h1 className="mt-3 text-sm text-gray-400">{category}</h1>
      </div>

        <div className="buttons-div flex justify-between mt-auto">

          <div>
            <Link to={link}>
              <button
                type="button"
                className="mt-4 rounded-sm bg-blue-400 px-2.5 py-1 text-md font-semibold text-white shadow-sm hover:bg-blue-800/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                View
              </button>
            </Link>
          </div>
          <div>
          {githubLink ? <Link to={githubLink}>
              <button className="mt-4 rounded-sm bg-blue-400 px-2.5 py-1 text-md font-semibold text-white shadow-sm hover:bg-blue-800/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 "
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.206 11.386.6.111.793-.26.793-.578 0-.287-.01-1.044-.015-2.052-3.338.724-4.042-1.584-4.042-1.584-.545-1.385-1.331-1.754-1.331-1.754-1.088-.742.082-.727.082-.727 1.203.084 1.838 1.236 1.838 1.236 1.07 1.837 2.805 1.305 3.49.999.109-.778.418-1.305.76-1.605-2.665-.307-5.466-1.333-5.466-5.93 0-1.31.468-2.385 1.235-3.229-.124-.307-.536-1.527.116-3.184 0 0 1.01-.322 3.3 1.233a11.561 11.561 0 013.005-.405c1.018.003 2.04.137 3.005.405 2.287-1.555 3.296-1.233 3.296-1.233.656 1.657.244 2.877.12 3.184.77.844 1.233 1.919 1.233 3.229 0 4.608-2.805 5.62-5.478 5.922.43.372.81 1.104.81 2.224 0 1.607-.015 2.902-.015 3.298 0 .32.192.694.8.577C20.566 21.797 24 17.297 24 12c0-6.627-5.373-12-12-12z"
                  />
                </svg>
              </button>
            </Link> : null }
            
          </div>
        </div>
      </div>
    </div>
  );
};
