import { useEffect, useRef, useState } from "react";

export default function Stats() {

  const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  const [projects, setProjects] = useState(0);
  const [teams, setTeams] = useState(0);
  const [equipment, setEquipment] = useState(0);


  // Detect when section visible
  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
        }
      },
      {
        threshold: 0.4, // 40% kelihatan baru jalan
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };

  }, []);


  // Counting animation
  useEffect(() => {

    if (!startCount) return;

    const projectTarget = 300;
    const teamTarget = 20;
    const equipmentTarget = 100;

    const speed = 25;

    const projectInterval = setInterval(() => {
      setProjects((prev) => {
        if (prev >= projectTarget) {
          clearInterval(projectInterval);
          return projectTarget;
        }
        return prev + 3;
      });
    }, speed);


    const teamInterval = setInterval(() => {
      setTeams((prev) => {
        if (prev >= teamTarget) {
          clearInterval(teamInterval);
          return teamTarget;
        }
        return prev + 1;
      });
    }, speed);


    const equipmentInterval = setInterval(() => {
      setEquipment((prev) => {
        if (prev >= equipmentTarget) {
          clearInterval(equipmentInterval);
          return equipmentTarget;
        }
        return prev + 2;
      });
    }, speed);


    return () => {
      clearInterval(projectInterval);
      clearInterval(teamInterval);
      clearInterval(equipmentInterval);
    };

  }, [startCount]);


  return (
    <section
      ref={sectionRef}
      className="bg-[#0f0f0f] text-white py-12 md:py-14 lg:py-16"
    >

      <div className="max-w-7xl mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center">

          {/* Item 1 */}
          <div>
            <h2 className="text-yellow-400 text-4xl md:text-5xl lg:text-6xl font-semibold mb-3">
              {projects}++
            </h2>

            <p className="text-base md:text-lg font-semibold leading-snug">
              Project <br /> Handled
            </p>
          </div>


          {/* Item 2 */}
          <div>
            <h2 className="text-yellow-400 text-4xl md:text-5xl lg:text-6xl font-semibold mb-3">
              {teams}++
            </h2>

            <p className="text-base md:text-lg font-semibold leading-snug">
              Teams Across <br /> Regions
            </p>
          </div>


          {/* Item 3 */}
          <div>
            <h2 className="text-yellow-400 text-4xl md:text-5xl lg:text-6xl font-semibold mb-3">
              {equipment}%
            </h2>

            <p className="text-base md:text-lg font-semibold leading-snug">
              In-House <br /> Equipment
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}
