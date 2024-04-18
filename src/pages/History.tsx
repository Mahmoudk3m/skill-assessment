import Carousel from "../components/Carousel";
import Label from "../components/Label";
import HistoryImg from "../assets/History.png";

export default function History() {
  return (
    <section className="h-screen flex flex-col justify-between">
      <div className="mt-16">
        <Label text={"History"} number={1} />
        <p className="text-sm md:text-lg oswald text-steel-blue ml-16">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit perspiciatis voluptas alias impedit
          blanditiis, nobis quasi quibusdam fugiat, illo libero consequuntur? Nesciunt, suscipit? Fugit, minima ab.
          Animi, illo nihil, ab minus dignissimos ipsa nemo perspiciatis, suscipit ducimus sapiente fugiat vitae. Odio
          temporibus blanditiis, itaque minima earum, dolorem sit sunt aspernatur at ipsum voluptatum amet culpa tempore
          exercitationem pariatur a quaerat soluta vitae! Eius amet, doloremque ratione cupiditate natus odit esse.
        </p>
      </div>
      <div className="w-screen flex justify-center items-center bg-steel-blue bg-opacity-50">
        <Carousel />
      </div>
      <div className="background">
        <img src={HistoryImg} alt="" />
      </div>
    </section>
  );
}
