import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ruha Holidays | Travel That Touches the Soul",
  description: "Your Trusted Travel Partner from Kerala – God’s Own Country. We offer complete travel solutions including family trips, school tours, houseboats, and honeymoon packages.",
  keywords: "Kerala tourism, Kerala travel, homestay, houseboat, Munnar, Alleppey, Wayanad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
