import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
const SettingsForm: React.FC = () => {
  const [settingsStatus, setSettingStatus] = useState<{
    [key: string]: boolean;
  }>({
    Header: true,
    Banner: true,
    CTA: true,
    Features: true,
    About: true,
    Service: true,
    Service2: true,
    SeeMore: true,
    AboutChooseArea: true,
    RecentProjects: true,
    BlogArea: true,
    BrandArea: true,
    Footer: true,
  });
  const router = useRouter();

  const handleToggle = (label: string) => {
    const newToggleButtons: { [key: string]: boolean } = { ...settingsStatus };
    newToggleButtons[`${label}`] = !newToggleButtons[`${label}`];
    window.localStorage.setItem(
      "settingsStatus",
      JSON.stringify(newToggleButtons)
    );
    setSettingStatus(newToggleButtons);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/");
  };
  useEffect(() => {
    window.localStorage.getItem("settingsStatus") &&
      setSettingStatus(
        JSON.parse(window.localStorage.getItem("settingsStatus")!)
      );
  }, []);
  return (
    <form
      onSubmit={handleSubmit}
      className="h-screen w-3/4 mx-auto text-[#212529]"
    >
      <div className="flex items-center justify-between">
        <h2 className="mt-12 text-center text-[24px] font-bold text-white">
          Site Configuration
        </h2>
        <button
          type="submit"
          className="mt-12 px-4 py-2 bg-[#007aff] text-white font-bold rounded hover:bg-blue-600"
        >
          Publish
        </button>
      </div>
      <div className="flex items-center flex-wrap mt-10 gap-y-4 bg-[#2A2A2D]  rounded-lg py-10">
        {Object.keys(settingsStatus).map((label: any, index: any) => (
          <div
            key={index}
            className="flex items-center justify-between w-1/2 px-[80px]"
          >
            <label className="text-lg text-white">{label}</label>
            <div>
              <button
                type="button"
                className={`w-12 h-6 rounded-full border-2 focus:outline-none ${
                  settingsStatus[`${label}`]
                    ? "bg-[#007aff] border-[#007aff]"
                    : "bg-gray-300 border-gray-300"
                }`}
                onClick={() => handleToggle(label)}
              >
                <span
                  className={`block w-5 h-5 rounded-full bg-white transform ${
                    settingsStatus[`${label}`]
                      ? "translate-x-full"
                      : "translate-x-0"
                  } transition-all duration-200`}
                />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-row-reverse"></div>
    </form>
  );
};

export default SettingsForm;
