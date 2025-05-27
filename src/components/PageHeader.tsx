type PageHeaderProps = {
  title: string;
};

export default function PageHeader({ title }: PageHeaderProps) {
  return (
    <div className="w-full px-6 h-72 md:h-96 flex items-center justify-center bg-cover bg-center relative bg-[url('/images/single-hero.jpg')]">
      <div className="absolute inset-0 bg-black bg-opacity-80" />
      <h1 className="relative z-10 text-center -mb-24 text-[2.8rem] md:text-[4rem] text-white font-bold">
        {title}
      </h1>
    </div>
  );
}
