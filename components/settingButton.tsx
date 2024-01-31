import Link from "next/link";
const SettingButton = () => {
  return (
    <div className="fixed right-0 bottom-5 px-4 py-2 bg-white border-2 border-black rounded cursor-pointer z-50">
      <Link href="/admin/settings" className="flex justify-center items-center">
        <img src="assets/images/setting.svg" alt="" width={32} height={32} />
      </Link>
    </div>
  );
};

export default SettingButton;
