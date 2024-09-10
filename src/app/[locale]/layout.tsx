import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Kanit } from '@next/font/google';
import Navbar from '../components/custom/Navbar';
import "./globals.css";
import Footer from '../components/custom/Footer';

const kanit = Kanit({
  subsets: ['latin'], // เลือก subset ที่ต้องการ
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // รวมทุกน้ำหนักที่มี
  style: ['normal', 'italic'], // รวมสไตล์ปกติและเอียง
});

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className={kanit.className} data-theme="light">
      <body>

        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}