import clsx from "clsx";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ITabsContextProps {
  activeTab: string | null;
  selectTab: (tab: string) => void;
}

const TabsContext = createContext<ITabsContextProps | undefined>(undefined);

interface ITabContainerProps {
  children: ReactNode;
  className?: string;
}

const TabContainer: React.FC<ITabContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        "flex items-center overflow-hidden rounded-md",
        className,
      )}
    >
      {children}
    </div>
  );
};

interface ITabProps {
  id: string;
  children: ReactNode;
  className?: string;
}

const Tab: React.FC<ITabProps> = ({ id, children, className }) => {
  const { activeTab, selectTab } = useContext(TabsContext)!;
  const isActive = activeTab === id;

  return (
    <button
      onClick={() => selectTab(id)}
      className={clsx(
        "flex-1  py-2 transition-all hover:border-Main hover:text-Main",
        className && className,
        isActive && "border-Main font-semibold text-Main",
      )}
    >
      {children}
    </button>
  );
};

// TabPanel 컴포넌트
interface ITabPanelProps {
  id: string;
  children: ReactNode;
}

const TabPanel: React.FC<ITabPanelProps> = ({ id, children }) => {
  const { activeTab } = useContext(TabsContext)!;
  return activeTab === id ? <div>{children}</div> : null;
};

// Tabs 컴포넌트
interface ITabsProps {
  children: ReactNode;
  defaultTab?: string;
}

interface TabsComponent extends React.FC<ITabsProps> {
  Tab: React.FC<ITabProps>;
  TabContainer: React.FC<ITabContainerProps>;
  TabPanel: React.FC<ITabPanelProps>;
}

const Tabs: TabsComponent = ({ children, defaultTab }) => {
  const [activeTab, setActiveTab] = useState<string | null>(defaultTab || null);
  const selectTab = (tab: string) => setActiveTab(tab);

  return (
    <TabsContext.Provider value={{ activeTab, selectTab }}>
      <div className="space-y-5">{children}</div>
    </TabsContext.Provider>
  );
};

// Tabs 컴포넌트를 내보냅니다.
Tabs.Tab = Tab;
Tabs.TabPanel = TabPanel;
Tabs.TabContainer = TabContainer;

export default Tabs;
