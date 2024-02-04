import clsx from "clsx";
import React, { createContext, useContext, useState, ReactNode } from "react";

// Context 생성
interface TabsContextProps {
  activeTab: string | null;
  selectTab: (tab: string) => void;
}

const TabsContext = createContext<TabsContextProps | undefined>(undefined);

// TabList 컴포넌트
interface ITabContainerProps {
  children: ReactNode;
}

const TabContainer: React.FC<ITabContainerProps> = ({ children }) => {
  return (
    <div className="flex items-center overflow-hidden rounded-md ">
      {children}
    </div>
  );
};

// Tab 컴포넌트
interface ITabProps {
  id: string;
  children: ReactNode;
}

const Tab: React.FC<ITabProps> = ({ id, children }) => {
  const { activeTab, selectTab } = useContext(TabsContext)!;

  const isActive = activeTab === id;

  return (
    <button
      onClick={() => selectTab(id)}
      className={clsx(
        "flex-1 border-b-2 py-2 ",
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
