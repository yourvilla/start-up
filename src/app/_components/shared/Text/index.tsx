export default function Text({
  className,
  children,
}: {
  className?: string;
  children: string | React.ReactNode;
}) {
  return <h1 className={className}>{children}</h1>;
}
