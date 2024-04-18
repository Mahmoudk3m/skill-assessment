import Logo from "../assets/Logo";

export default function Footer() {
  return (
    <footer className="w-screen flex flex-row justify-center items-center bg-steel-blue p-4 gap-8 md:gap-96">
      <div className="flex flex-row items-center justify-center">
        <div style={{ opacity: 0.3 }}>
          <Logo />
        </div>
        <div className="flex flex-col justify-center items-center ml-4">
          <h1 className="text-base lg:text-2xl font-bold  uppercase" style={{ lineHeight: 0, color: "#63769d" }}>
            LosAngeles
          </h1>
          <h2 className="text-base lg:text-2xl font-bold  uppercase mt-5" style={{ lineHeight: 0, color: "#63769d" }}>
            Mountains
          </h2>
        </div>
      </div>
      <p className="text-sm lg:text-xl font-bold uppercase" style={{ color: "#63769d" }}>
        copyright 2016. All Rights Reserved
      </p>
    </footer>
  );
}
