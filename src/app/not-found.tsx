import Button from "@/components/ui/Button";

export default function Custom404() {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-[80vh] w-full bg-cover bg-center overflow-hidden"
      style={{ backgroundImage: "url('/images/404.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      <div className="relative z-10 flex flex-col items-center">
        <p className="text-xl md:text-2xl text-white mb-4">
          Przepraszamy, nie znaleziono takiej strony.
        </p>
        <h1 className="text-4xl font-bold text-white mb-6">
          404 - Strona nie znaleziona
        </h1>
        <Button variant="primary" className="mb-4" href="/">
          Powrót do strony głównej
        </Button>
      </div>
    </div>
  );
}
