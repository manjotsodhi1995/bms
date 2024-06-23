function HomeContainerCard({ children }: any) {
  return (
    <div className="h-[400px] rounded-lg px-6 py-4 flex flex-col gap-1 bg-blue-box shadow-xl">
      {children}
    </div>
  );
}

export default HomeContainerCard;
