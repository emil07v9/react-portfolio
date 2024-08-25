import React from "react";

const Contact: React.FC = () => {
  return (
    <main className="mb-10 lg:mb-40 bg-[#E9EFCD]">
      <section className="mb-10">
        <h1 className="mb-4 text-3xl font-bold">Get in touch with me</h1>
        <h2 id="preheader" className="mt-4 max-w-prose text-xl">
          Let's grab a cup of coffee!
        </h2>
      </section>

      <section className="mt-10 lg:grid grid-cols-3 gap-4">
        <div>
          <h3 id="preheader" className="text-xl font-semibold">
            Email
          </h3>
          <h4 className="projectcaption text-lg">
            <a
              href="mailto:emilie@webschultz.dk"
              className="text-blue-600 hover:underline"
            >
              emilie@webschultz.dk
            </a>
          </h4>
        </div>

        <div className="mt-10 lg:mt-0">
          <h3 id="preheader" className="text-xl font-semibold">
            Mobile
          </h3>
          <h4 className="projectcaption text-lg">
            <a href="tel:42423796" className="text-blue-600 hover:underline">
              +45 42423796
            </a>
          </h4>
        </div>

        <div className="mt-10 lg:mt-0">
          <h3 id="preheader" className="text-xl font-semibold">
            Socials
          </h3>
          <h4 className="projectcaption text-lg">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/emiliekempelschultz/"
            >
              <img className="w-10" src="/img/linkedin.png" alt="LinkedIn" />
            </a>
          </h4>
        </div>
      </section>
    </main>
  );
};

export default Contact;
