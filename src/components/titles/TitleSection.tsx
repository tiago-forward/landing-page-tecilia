interface TitleSectionProps {
  title: string;
}

export default function TitleSection({ title }: TitleSectionProps) {
  return (
    <h2 className="font-actioness font-semibold text-3xl text-center mt-16 mb-8 px-4 md:text-4xl lg:text-5xl">
      {title}
    </h2>
  );
}
