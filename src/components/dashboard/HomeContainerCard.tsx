function HomeContainerCard({ children }: any) {
  return (
    <div className="h-[400px] rounded-md px-6 py-4 flex flex-col gap-1 bg-gray-400">
      {children}
    </div>
  );
}

export default HomeContainerCard;
