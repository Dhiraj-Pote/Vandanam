import "./globals.css";
import Sidebar from "@/components/Sidebar";

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
        <Sidebar />
        <main className="ml-56 px-12 py-16 leading-relaxed">
          {children}
        </main>
      </body>
    </html>
  );
}