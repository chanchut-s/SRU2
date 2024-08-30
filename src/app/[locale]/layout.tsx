import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {Kanit} from '@next/font/google';
import Navbar from '../components/Navbar';
import "./globals.css";

const kanit = Kanit({
  subsets: ['latin'], // เลือก subset ที่ต้องการ
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], // รวมทุกน้ำหนักที่มี
  style: ['normal', 'italic'], // รวมสไตล์ปกติและเอียง
});
 
export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale} className={kanit.className}>
      <body>
        
        <NextIntlClientProvider messages={messages}> 
          <Navbar/>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}