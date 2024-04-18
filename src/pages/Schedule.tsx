import Mountain1 from "../assets/Mountain1.png";
import Card from "../components/Card";
export default function Schedule({ selectedOption }: { selectedOption: number }) {
  return (
    <section className="w-screen h-auto flex flex-row items-start justify-start">
      <img src={Mountain1} alt="" className="w-full" />
      <div className="w-full absolute">
        <Card selectedOption={selectedOption} />
      </div>
    </section>
  );
}
