import { GiCheckMark } from "react-icons/gi";

const data = [
  {
    id: 1,
    title: "UI/UX Design",
    list: [
      "Creative and user-centric UI/UX design solutions tailored to your specific needs.",
      "Expert designers who understand the importance of intuitive user experiences.",
      "Attention-grabbing visual elements and engaging interfaces to enhance user engagement.",
      "Responsive design to ensure seamless experiences across different devices and screen sizes.",
      "Usability testing and iterative design process to optimize user interactions.",
    ],
  },
  {
    id: 2,
    title: "Web Development",
    list: [
      "Custom web development to build robust and scalable websites.",
      "Full-stack development expertise covering front-end and back-end technologies.",
      "Efficient coding practices for clean, optimized, and maintainable codebases.",
      "Integration of advanced functionalities and third-party APIs to enhance website capabilities.",
      "Cross-browser compatibility and responsive design for excellent performance on all devices.",
      "Content management system (CMS) integration for easy content updates and management.",
    ],
  },
  {
    id: 3,
    title: "Maintenance and Support",
    list: [
      "Ongoing website maintenance and updates to ensure optimal performance and security.",
      "Regular backups and disaster recovery solutions to safeguard your website data.",
      "Bug fixing and troubleshooting to resolve any technical issues promptly.",
      "Website security monitoring and protection against malware and cyber threats.",
      "Performance optimization to improve loading speed and overall user experience.",
      "Content updates and management to keep your website fresh and up to date.",
      "24/7 technical support and assistance for any website-related queries or emergencies.",
    ],
  },
];

const Service = () => {
  return (
    <div className="text-center mt-10 mb-20 md:pt-2 md:pb-10 llg:mb-10 lg:mb-10 lg:mt-8">
      <h6 className="text-xs md:text-base llg:text-xs lg:text-xs">
        What I Offer
      </h6>
      <h2 className="text-xl mt-1 text-blue-500 font-bold md:text-2xl">
        Services
      </h2>

      <div className="grid grid-cols-1 gap-4 w-5/6 mt-6 mx-auto md:grid-cols-2 md:w-4/5 md:gap-10 md:mt-10 llg:grid-cols-3 llg:gap-6 llg:w-3/4 lg:grid-cols-3 lg:gap-6 lg:w-3/4 lg:mt-7">
        {data.map((data) => {
          return (
            <div
              key={data.id}
              className="group bg-blue-900 border-solid border-[1px] border-indigo-500 rounded-b-xl hover:bg-indigo-900 hover:text-GoldenPoppy ease-in-out duration-500 cursor-pointer"
            >
              <div className="bg-indigo-500 p-8 rounded-b-[2rem] group-hover:bg-blue-600 llg:p-6 lg:p-6">
                <h3>{data.title}</h3>
              </div>
              <ul className="text-left py-10 llg:py-6 lg:py-6">
                {data.list.map((service, index) => {
                  return (
                    <li
                      key={index}
                      className="flex gap-2 px-6 text-sm text-ellipsis"
                    >
                      <GiCheckMark
                        className={
                          index === 0
                            ? "mt-1 inline-block w-10"
                            : "mt-5 inline-block w-10"
                        }
                      />
                      <p className={index === 0 ? "mt-0" : "mt-4"}>{service}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
