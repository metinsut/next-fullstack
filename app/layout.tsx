import './globals.css';
import { Nunito } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import ToasterProvider from "@/app/providers/ToasterProvider";
import LoginModal from "@/app/components/modals/LoginModal";
import RegisterModal from "@/app/components/modals/RegisterModal";
import SearchModal from "@/app/components/modals/SearchModal";

export const metadata = {
  title: 'Airbnb',
  description: 'Next Airbnb Clone',
};

const font = Nunito({
  subsets: ['latin'],
});

type Props = {
  children: React.ReactNode;
};

function RootLayout(props: Props) {
  const { children } = props;

  return (
    <html lang="en">
      <body className={font.className}>
      <ToasterProvider />
      <LoginModal />
      <RegisterModal />
      <SearchModal />
      <Navbar />
      <div className="pb-20 pt-28">
          {children}
      </div>
      </body>
    </html>
  );
}

export default RootLayout;
