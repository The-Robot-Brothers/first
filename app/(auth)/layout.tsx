import { FooterApp } from "~/components/app/footer-app";
import { HeaderApp } from "~/components/app/header-app";
import { SidebarApp } from "~/components/app/sidebar-app";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id='main-container' className="flex bg-gray-700 h-screen">
    <SidebarApp />

    <div id='main-wrapper' className="flex flex-col flex-1">
      <HeaderApp />

      <main id='main-content' className="p-2 flex-1">
        {children}
      </main>

      <FooterApp />
    </div>
  </div>
  );
}
