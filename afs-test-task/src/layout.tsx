import MainMenu from "./components/shared/MainMenu/MainMenu";
import SideBar from "./components/shared/SideBar/SideBar";
import "./index.css";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="root_container">
      <MainMenu />
      <SideBar />
      <main className="main">{children}</main>
    </div>
  );
}
