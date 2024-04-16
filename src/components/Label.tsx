export default function Label({ text, number }: { text: string; number: number }) {
  return (
    <div className="flex flex-row justify-start items-center">
      <h1 className="text-6xl md:text-9xl font-bold text-steel-blue uppercase oswald opacity-50">0{number}.</h1>
      <p className="text-xl md:text-4xl font-bold oswald text-steel-blue uppercase -ml-3 -mb-3 md:-ml-6 md:-mb-6">
        {text}
      </p>
    </div>
  );
}
