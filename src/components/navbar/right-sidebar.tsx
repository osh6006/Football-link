interface IRightSidebarProps {}

const RightSidebar: React.FunctionComponent<IRightSidebarProps> = (props) => {
  return (
    <aside className="hidden h-[100dvh] w-[15dvw] min-w-60 border-l bg-red-400 px-3 py-2 xl:block">
      <nav>test1</nav>
      <nav>test1</nav>
      <nav>test1</nav>
      <nav>test1</nav>
      <nav>test1</nav>
    </aside>
  );
};

export default RightSidebar;
