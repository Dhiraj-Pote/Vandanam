import "./globals.css";
import Sidebar from "@/components/Sidebar";
import MobilePrompt from "@/components/MobilePrompt";

export const metadata = {
  title: "Vandanam - Spiritual Prayers",
  description: "Offering prayers at the lotus feet of Kṛṣṇa whose another name is Uttamaśloka",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MobilePrompt />
        <Sidebar />
        <main className="ml-0 sm:ml-56 px-4 sm:px-8 md:px-12 py-4 leading-relaxed">
          {children}
        </main>
      </body>
    </html>
  );
}