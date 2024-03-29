import "./App.css";
// import Navbar from "./components/Navbar";
import { NavLink } from "react-router-dom";
import { LuUserCircle2 } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { RiHome6Line } from "react-icons/ri";
import { HiOutlineChartSquareBar } from "react-icons/hi";
import { FiLayers } from "react-icons/fi";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { BiPieChartAlt2 } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { PiSlidersHorizontalLight } from "react-icons/pi";
import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import { VscCloudUpload } from "react-icons/vsc";
import { FcAdvertising } from "react-icons/fc";
function App() {
  return (
    <>
      <div className="main w-full h-screen flex ">
        <div className="w-[6%] h-full flex justify-center items-center">
          <div className="h-screen flex flex-col-reverse justify-between">
            <div
              className="grid grid-rows-3 gap-1 "
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="w-[40px] h-[40px] hover:bg-gray-500 rounded-lg pr-2 flex items-center">
                <LuUserCircle2
                  className="w-10 h-10 pb-3 ml-2 mt-3"
                  style={{ color: "white" }}
                />
              </div>
              <div className="w-[40px] h-[40px] hover:bg-gray-500 rounded-lg pr-2 flex items-center">
                <FiSettings
                  className="w-8 h-8 ml-2"
                  style={{ color: "white" }}
                />
              </div>
              <img
                src="./images/profile.jpg"
                className="w-12 h-10 rounded-full mt-2"
              />
            </div>

            <div className="w-8 h-8 pb-3" style={{ color: "white" }}>
              {/* <div>logo</div> */}
              <div className="grid grid-rows-5  pl-2">
                <div className="w-[40px] h-[40px] hover:bg-gray-500 rounded-lg text-center pr-2 flex items-center">
                  <RiHome6Line
                    className="w-6 h-6 ml-2"
                    style={{ color: "white" }}
                  />
                </div>
                <div className="w-[40px] h-[40px] hover:bg-gray-500 rounded-lg flex items-center">
                  <HiOutlineChartSquareBar
                    className="w-6 h-6 ml-2"
                    style={{ color: "white" }}
                  />
                </div>
                <div className="w-[40px] h-[40px] hover:bg-gray-500 rounded-lg flex items-center">
                  <FiLayers
                    className="w-6 h-6 ml-2"
                    style={{ color: "white" }}
                  />
                </div>
                <div className="w-[40px] h-[40px] hover:bg-gray-500 rounded-lg flex items-center">
                  <RiCheckboxMultipleLine
                    className="w-6 h-6 ml-2"
                    style={{ color: "white" }}
                  />
                </div>
                <div className="w-[40px] h-[40px] hover:bg-gray-500 rounded-lg flex items-center">
                  <BiPieChartAlt2
                    className="w-6 h-6 ml-2"
                    style={{ color: "white" }}
                  />
                </div>
                <div className="w-[40px] h-[40px] hover:bg-gray-500 rounded-lg flex items-center">
                  <FiUsers
                    className="w-6 h-6 ml-2"
                    style={{ color: "white" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[94%] h-screen bg-white rounded-tl-3xl mt-[15px] flex justify-center ">
          <div className="w-[95%] flex flex-col">
            {/* Navbar1 */}
            <div className="navbar w-full flex mt-[25px]">
              <div className="w-[80%] font-semibold text-xl dash">
                Dashboard
              </div>
              <div className="w-[20%] flex">
                <div className="p-4 text-sm font-semibold">
                  <CiSearch className="w-6 h-6" />
                </div>
                <div className="p-4 both text-sm font-semibold flex items-center">
                  <PiSlidersHorizontalLight className="w-6 h-6" />
                  <span className="pl-2">Customize</span>
                </div>
                <div className="p-4 both text-sm font-semibold flex items-center">
                  <VscCloudUpload className="w-6 h-6" />
                  <span className="pl-2">Export</span>
                </div>
              </div>
            </div>

            {/* Navbar2 */}
            <div className=" w-full">
              <NavLink to="/" className="performance pb-[5px] text-base ">
                Market Analysis
              </NavLink>
              <NavLink
                to="/performance"
                className="performance pb-[5px] ml-4 text-base"
              >
                Performance
              </NavLink>
            </div>
            <hr className="mt-[5px]" />

            {/* compo */}
            <div className="flex w-full z-1">
              <div className="1st w-[33.33%]">
                <div className="w-full p-4 border mt-4 rounded-lg mr-6 shadow-xl">
                  <div className="flex justify-between  ">
                    <span className="font-semibold">Today's revenue</span>
                    <span>
                      <IoEllipsisHorizontalSharp />
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col justify-between w-[224px] h-[190px]">
                      <span className="font-semibold">$1,234</span>
                      <span className="text-green-600 ">
                        15% <span className="text-grey">last month</span>
                      </span>
                    </div>
                    <div className="relative w-[192px] ">
                      {/* <div></div> */}
                      <div className="absolute bottom-0 right-0 ">
                        <span>Image</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="1st w-[33%] ml-4">
                <div className="w-full p-4 border mt-4 rounded-lg mr-2 shadow-xl">
                  <div className="flex justify-between  ">
                    <span className="font-semibold">Today's revenue</span>
                    <span>
                      <IoEllipsisHorizontalSharp />
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col justify-between w-[224px] h-[190px]">
                      <span className="font-semibold">$1,234</span>
                      <span className="text-green-600 ">
                        15% <span className="text-grey">last month</span>
                      </span>
                    </div>
                    <div className="relative w-[192px] h-[190px] ">
                      {/* <div></div> */}
                      <div className="absolute bottom-0 right-0 ">
                        <span>Image</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* w-[224px] h-[190px]  w-[128px] h-[64px]*/}
              <div className="1st w-[33.33%]">
                <div className="w-full p-4 border mt-4 rounded-lg mx-4 shadow-xl">
                  <div className="flex justify-between  ">
                    <span className="font-semibold">Today's revenue</span>
                    <span>
                      <IoEllipsisHorizontalSharp />
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex flex-col justify-between ">
                      <span className="font-semibold">$1,234</span>
                      <span className="text-green-600 ">
                        15% <span className="text-grey">last month</span>
                      </span>
                    </div>
                    <div className="relative w-[192px] h-[190px] ">
                      {/* <div></div> */}
                      <div className="absolute bottom-0 right-0  ">
                        <span>Image</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* compo2 */}
            <div className="w-full flex mt-6">
              <div className=" w-[60%] border border-solid rounded-lg">
                <div className="flex justify-between p-4 ">
                  <div className="flex flex-col">
                    <span className="text-lg font-semibold">
                      Current Market Trade
                    </span>
                    <span>
                      Track how your rating compares to your industry average.
                    </span>
                  </div>
                  <div className="flex items-center justify-center text-center">
                    <span className=" border border-solid border-gray-400 p-2 rounded-l-lg font-semibold ">
                      12 months
                    </span>
                    <span className=" border border-solid border-gray-400  p-2 font-semibold">
                      30 days
                    </span>
                    <span className=" border border-solid border-gray-400  p-2 rounded-r-lg font-semibold">
                      3 days
                    </span>
                  </div>
                </div>
                <div className="p-3 m-2 border border-solid border-gray-400 rounded-lg ">
                  <span className="same p-2 rounded-lg font-semibold hover:drop-shadow-2xl">
                    Market
                  </span>
                  <span className="same p-2 ml-2 rounded-lg font-semibold ">
                    Category
                  </span>
                  <span className="same p-2 ml-2 rounded-lg font-semibold ">
                    Products
                  </span>
                  <span className="same p-2 ml-2 rounded-lg font-semibold ">
                    {" "}
                    Cross selling
                  </span>
                  <span className="same p-2 ml-2 rounded-lg font-semibold ">
                    {" "}
                    Geography
                  </span>
                </div>
                <div className="w-full warning flex ">
                  <div className="w-[6%] h-[0%]">
                    <FcAdvertising className="mt-[7px] w-[78px] h-[54px]" />
                  </div>
                  <div className="w=[90%] flex flex-col p-2 ml-6">
                    <span className="text-lg font-semibold">
                      Your customer market is increasing! Set up Ad Campaign to
                      reach customers
                    </span>
                    <span>
                      We will guide you through entire setup of Campaign
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-[40%] p-3 m-2 border border-solid border-gray-400 rounded-lg z-2">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold">
                    Industry Opportunities
                  </span>
                  <span>
                    <IoEllipsisHorizontalSharp />
                  </span>
                </div>
                <hr className="mt-4" />
                <div></div>
              </div>
            </div>

            {/* compo3 */}

            <div className="w-full flex mt-4">
              <div className=" w-[50%] border border-solid border-gray-400 rounded-lg p-4 mx-1">
                <div className="flex justify-between mb-4">
                  <span className="text-lg font-semibold">
                    Trading in your industry
                  </span>
                  <span>
                    <IoEllipsisHorizontalSharp />
                  </span>
                </div>
                <hr className="mt-4" />
              </div>
              <div className="w-[50%] p-4 border border-solid border-gray-400 rounded-lg mx-1">
                <div className="flex justify-between mb-4">
                  <span className="text-lg font-semibold">
                    Ad Campaign Performance
                  </span>
                  <span>
                    <IoEllipsisHorizontalSharp />
                  </span>
                </div>
                <hr />
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
