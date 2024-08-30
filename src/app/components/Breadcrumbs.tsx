'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';


const Breadcrumbs = () => {
    const [pathArray, setPathArray] = useState<string[]>([]);
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        const currentPath = window.location.pathname;
  
        // ตัดส่วน locale ออกไป (เช่น /en/ หรือ /fr/)
        const pathWithoutLocale = currentPath.replace(/^\/[a-z]{2}\//, '/');
  
        // แยก path ออกมาเป็น array
        const paths = pathWithoutLocale.split('/').filter((path) => path);
  
        setPathArray(paths); // เซ็ตค่า paths ลงใน state
      }
    }, []);

    return (
        <div className="breadcrumbs text-sm">
            <ul className="flex space-x-2">
                <li>
                    <Link href="/" className="text-blue-600 hover:underline">Home</Link>
                </li>
                {pathArray.map((path, index) => {
                    const isLast = index === pathArray.length - 1;
                    const href = '/' + pathArray.slice(0, index + 1).join('/');

                    return (
                        <li key={href}>
                            {!isLast ? (
                                <Link href={href}
                                    className="text-blue-600 hover:underline">
                                    {decodeURIComponent(path)}
                                </Link>
                            ) : (
                                <span>{decodeURIComponent(path)}</span>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Breadcrumbs;
