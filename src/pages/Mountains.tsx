import Label from "../components/Label";

export default function Mountains() {
  return (
    <section className="w-full">
      <div className="flex flex-col md:flex-row items-center p-4">
        <Label text={"Climb"} number={2} />
        <p className="text-steel-blue text-sm md:text-lg ml-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum numquam veniam repellat commodi labore odit
          ratione libero distinctio? Animi quos pariatur necessitatibus deleniti, ullam modi non dolores molestiae
          recusandae in!
        </p>
      </div>
    </section>
  );
}
