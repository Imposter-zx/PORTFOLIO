// import qrCode from "figma:asset/e11cf166d6911231e3ad6387b64b2eb27c95d216.png";

export default function App() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 sm:p-8">
      {/* A4 Container - Print-ready proportions */}
      <div className="w-full max-w-[210mm] bg-white shadow-2xl relative">
        {/* CV Content */}
        <div className="px-6 py-8 md:px-16 md:py-12">

          {/* Header Section */}
          <header className="mb-16">
            <div className="mb-8">
              <h1 className="text-4xl md:text-[64px] font-[900] tracking-tight leading-[0.9] mb-3 text-black">
                ILYAS AIT OULHIANE
              </h1>
              <p className="text-[20px] tracking-wide text-gray-600 font-[300]">
                Developer & Creative Designer
              </p>
            </div>

            {/* Subtle separator with blue accent */}
            <div className="w-full h-[1px] bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-transparent mb-8"></div>

            {/* Contact Info */}
            <div className="flex flex-col md:flex-row gap-2 md:gap-8 text-[13px] text-gray-600">
              <a href="mailto:aitoulhyaneilyasse@gmail.com" className="hover:text-blue-600 transition-colors">
                aitoulhyaneilyasse@gmail.com
              </a>
              <a href="https://ilyasportfolio.vercel.app" className="hover:text-blue-600 transition-colors">
                ilyasportfolio.vercel.app
              </a>
            </div>
          </header>

          {/* About Section */}
          <section className="mb-14">
            <h2 className="text-[11px] font-[700] uppercase tracking-[0.15em] mb-5 text-black">
              About
            </h2>
            <p className="text-[15px] leading-[1.75] text-gray-700 max-w-full md:max-w-[85%]">
              Computer Science student at IFIAG specializing in bridging the gap between logical
              backend structures and visually stunning frontend experiences. Self-taught mindset
              with an obsession for creative problem-solving. Whether crafting 3D assets in Blender
              or optimizing a React application, I aim for excellence in every pixel.
            </p>
            <div className="mt-4 pl-4 border-l-2 border-blue-500">
              <p className="text-[14px] italic text-gray-600">
                Currently seeking a 1-3 month internship to contribute skills to a dynamic team.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-14">
            <h2 className="text-[11px] font-[700] uppercase tracking-[0.15em] mb-5 text-black">
              Core Tech Stack
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Programming */}
              <div>
                <h3 className="text-[13px] font-[600] mb-3 text-black">
                  Programming
                </h3>
                <ul className="space-y-2 text-[13px] text-gray-600">
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>PHP</li>
                  <li>C / C#</li>
                  <li>Java</li>
                </ul>
              </div>

              {/* Web Development */}
              <div>
                <h3 className="text-[13px] font-[600] mb-3 text-black">
                  Web Development
                </h3>
                <ul className="space-y-2 text-[13px] text-gray-600">
                  <li>React / Next.js</li>
                  <li>HTML5 / CSS3</li>
                  <li>Laravel</li>
                  <li>Vite</li>
                </ul>
              </div>

              {/* Design */}
              <div>
                <h3 className="text-[13px] font-[600] mb-3 text-black">
                  Design
                </h3>
                <ul className="space-y-2 text-[13px] text-gray-600">
                  <li>UI/UX</li>
                  <li>Figma</li>
                  <li>Blender (3D)</li>
                  <li>Photoshop</li>
                  <li>Adobe XD</li>
                </ul>
              </div>

              {/* Tools & OS */}
              <div>
                <h3 className="text-[13px] font-[600] mb-3 text-black">
                  Tools & OS
                </h3>
                <ul className="space-y-2 text-[13px] text-gray-600">
                  <li>Git / GitHub</li>
                  <li>Linux</li>
                  <li>Docker</li>
                  <li>VS Code</li>
                  <li>Terminal</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-14">
            <h2 className="text-[11px] font-[700] uppercase tracking-[0.15em] mb-5 text-black flex flex-col md:flex-row md:items-center">
              Selected Projects
              <span className="mt-1 md:mt-0 md:ml-3 text-blue-600 font-[600]">15+ Projects · 2+ Years Coding</span>
            </h2>

            <div className="space-y-7">
              {/* Project 1 */}
              <div>
                <h3 className="text-[15px] font-[600] mb-2 text-black">
                  AegisScan-OpenCore
                </h3>
                <p className="text-[14px] leading-[1.7] text-gray-700 mb-2">
                  Mission-Aware Adversarial Simulation Framework for Defensive Security Research.
                  Advanced threat detection and analysis system with real-time monitoring capabilities.
                </p>
                <p className="text-[11px] text-gray-500">
                  Python · Security Research · Adversarial Simulation
                </p>
              </div>

              {/* Project 2 */}
              <div>
                <h3 className="text-[15px] font-[600] mb-2 text-black">
                  Java Client-Server Application
                </h3>
                <p className="text-[14px] leading-[1.7] text-gray-700 mb-2">
                  Full-stack client-server architecture implementing robust networking protocols
                  and data management systems with multi-threaded capabilities.
                </p>
                <p className="text-[11px] text-gray-500">
                  Java · Networking · Multi-threading · Server Architecture
                </p>
              </div>

              {/* Project 3 */}
              <div>
                <h3 className="text-[15px] font-[600] mb-2 text-black">
                  MediLink & Car-Rental Systems
                </h3>
                <p className="text-[14px] leading-[1.7] text-gray-700 mb-2">
                  Enterprise-level web applications featuring modern UI/UX, database integration,
                  and seamless user experiences for healthcare and automotive industries.
                </p>
                <p className="text-[11px] text-gray-500">
                  JavaScript · React · Database Design · UI/UX
                </p>
              </div>
            </div>
          </section>

          {/* Experience & Education */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 mb-6">
            {/* Education */}
            <section>
              <h2 className="text-[11px] font-[700] uppercase tracking-[0.15em] mb-5 text-black">
                Education
              </h2>

              <div>
                <h3 className="text-[14px] font-[600] text-black">
                  Computer Science
                </h3>
                <p className="text-[12px] text-gray-600 mt-1">
                  IFIAG · Current Student
                </p>
                <p className="text-[12px] text-gray-500 mt-2">
                  Focus: Full-stack development & creative motion design
                </p>
              </div>
            </section>

            {/* Core Strengths with QR Code */}
            <section className="relative">
              <h2 className="text-[11px] font-[700] uppercase tracking-[0.15em] mb-5 text-black">
                Core Strengths
              </h2>

              <div className="flex flex-col sm:flex-row gap-6 items-start">
                <ul className="space-y-2 text-[13px] text-gray-600 flex-1">
                  <li>• Clean, maintainable code architecture</li>
                  <li>• UI/UX mastery with aesthetic design sense</li>
                  <li>• Fast learner, passionate about new technologies</li>
                  <li>• Systems thinking for robust solutions</li>
                </ul>

                {/* QR Code integrated with Core Strengths */}
                <div className="flex flex-col items-center flex-shrink-0">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://ilyasportfolio.vercel.app"
                    alt="Portfolio QR Code"
                    className="w-[2.5cm] h-[2.5cm] object-contain"
                  />
                  <p className="text-[9px] text-gray-500 mt-2 tracking-wide text-center whitespace-nowrap">
                    Scan to view portfolio
                  </p>
                </div>
              </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}