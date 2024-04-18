import Navbar from "../components/Navbar";
import LA from "../assets/LA.png";
export default function Main() {
  return (
    <section className="w-full h-screen flex flex-row items-start justify-center">
      <Navbar />
      <div className="background">
        <img src={LA} alt="" />
      </div>
    </section>
  );
}
