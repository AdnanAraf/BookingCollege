import React from "react";
import { Link } from "react-router-dom";

const ResearchPaper = () => {
  return (
    <div className="overflow-hidden">
      <div>
        <h1 className="text-[40px] text-center font-semibold mt-[20px]">
          Research Paper
        </h1>
      </div>
      <div className="lg:grid lg:grid-cols-3 grid grid-cols-1 lg:ml-[100px]  mt-[100px] ">
        <div className="h-[500px] lg:w-[400px] rounded-lg shadow-2xl bg-black ">
          <div>
            <div>
              <img
                className="h-[300px] lg:w-full rounded-3xl mt-[-50px]"
                src="https://i.ibb.co/CzqXdnF/photo.png"
              ></img>
            </div>
            <div>
              <h1 className="text-center text-white text-[30px]">
                MIT University
              </h1>
            </div>
            <div>
              <h1 className="text-[20px] text-red-500 ml-[10px] w-full">
                Research Paper:
              </h1>
            </div>
            <div className="text-white  mt-[30px]">
              <Link to="https://www.media.mit.edu/publications/conductive-hydrogels-for-bioenergy-harvesting-and-self-powered-application/">
                1. Conductive Hydrogels for Bioenergy Harvesting and
                Self-Powered Application
              </Link>
              <br></br>
              <Link to="https://onlinelibrary.wiley.com/doi/abs/10.1002/macp.200400225">
                2. Ultrafine Electrospun Polyamide-6 Fibers: Effect of Solution
                Conditions on Morphology and Average Fiber Diameter
              </Link>
              <br></br>
              <Link to="https://ieeexplore.ieee.org/abstract/document/932724/">
                3. The impact of the MIT-BIH Arrhythmia Database
              </Link>
            </div>
          </div>
        </div>
        {/* Harvard University */}
        <div className="h-[500px] lg:w-[400px] rounded-lg shadow-2xl bg-gray-600 lg:mt-[0px] mt-[100px] ">
          <div>
            <div>
              <img
                className="h-[300px] lg:w-full rounded-3xl mt-[-50px]"
                src="https://i.ibb.co/DVJG86h/harvard-university-cambridge-usa-1268-14363.jpg"
              ></img>
            </div>
            <div>
              <h1 className="text-center text-white text-[30px]">
                Harvard University
              </h1>
            </div>
            <div>
              <h1 className="text-[20px] text-red-500 ml-[10px] w-full ">
                Research Paper:
              </h1>
            </div>
            <div className="text-white ]">
              <Link to="https://www.media.mit.edu/publications/conductive-hydrogels-for-bioenergy-harvesting-and-self-powered-application/">
                1.Estimating industry multiples
              </Link>
              <br></br>
              <Link to="https://onlinelibrary.wiley.com/doi/abs/10.1002/macp.200400225">
                2. The major symptoms of hysteria: Fifteen lectures given in the
                medical school of Harvard University
              </Link>
              <br></br>
              <Link to="https://ieeexplore.ieee.org/abstract/document/932724/">
                3. The demographic determinants of savings, investment and
                international capital flows
              </Link>
            </div>
          </div>
        </div>

        {/* Stanford */}
        <div className="h-[500px] lg:w-[400px] rounded-lg  shadow-2xl bg-black mt-[100px] lg:mt-[0px]">
          <div>
            <div>
              <img
                className="h-[300px] lg:w-[600px] rounded-3xl mt-[-50px]"
                src="https://i.ibb.co/CzqXdnF/photo.png"
              ></img>
            </div>
            <div>
              <h1 className="text-center text-white text-[30px]">Stanford</h1>
            </div>
            <div>
              <h1 className="text-[20px] text-red-500 ml-[10px] w-full">
                Research Paper:
              </h1>
            </div>
            <div className="text-white  mt-[10px]">
              <Link to="https://www.media.mit.edu/publications/conductive-hydrogels-for-bioenergy-harvesting-and-self-powered-application/">
                1. Software Agents Michael R. Genesereth Logic Group Computer
                Science Department Stanford University
              </Link>
              <br></br>
              <Link to="https://onlinelibrary.wiley.com/doi/abs/10.1002/macp.200400225">
                2. Status of radiation treatment of prostate cancer at Stanford
                University
              </Link>
              <br></br>
              <Link to="https://ieeexplore.ieee.org/abstract/document/932724/">
                3. The value of medical student research: the experience at
                Stanford University School of Medicine
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchPaper;
