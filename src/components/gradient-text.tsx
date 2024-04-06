type GradientTextPropsT = {
  children: React.ReactNode;
  size: string;
};
export default function GradientText({ size, children }: GradientTextPropsT) {
  return (
    <>
      <div
        className={`  ${size} bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text font-semibold `}
      >
        {children}
      </div>
    </>
  );
}
