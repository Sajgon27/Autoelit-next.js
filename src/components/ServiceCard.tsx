type ServiceCardProps = {
  title: string;
  desc: string;
  icon?: React.ReactNode;
  containerClass?: string;
};

export default function ServiceCard({
  title,
  desc,
  icon,
  containerClass,
}: ServiceCardProps) {
  return (
    <div
     
      className={` flex flex-col gap-4 rounded-lg border h-auto border-[#533c3c] bg-[#261c1c] p-6 hover:shadow-2xl hover:border-[#e51919] transition-all duration-300 transform hover:-translate-y-1 ${containerClass ? containerClass : ''}`}
    >
      {icon && (
        <div className="text-[#e51919] mx-auto">{icon}</div>
      )}

      <div className="flex flex-col gap-1 text-center">
        <h3 className="text-white text-xl font-bold leading-tight">
          {title}
        </h3>
        <p className="text-[#b89d9d] text-sm font-normal leading-normal">
          {desc}
        </p>
      </div>
    </div>
  );
}
