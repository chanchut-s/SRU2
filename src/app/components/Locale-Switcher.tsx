'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import React, { useTransition } from 'react'

function LocaleSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const pathname = usePathname();

    const localAcitve = useLocale();

    const onSelectChange = (nextLocale: string) => {
        const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '');

        startTransition(() => {
            router.replace(`/${nextLocale}${pathWithoutLocale}`);
        });
    };

    return (
        <div className="dropdown dropdown-bottom dropdown-end">
            <div  tabIndex={0} role="button" className="btn ">
                {localAcitve.toUpperCase()}
            </div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 mt-5 shadow">
                <li>
                    <a onClick={() => onSelectChange('th')} className={isPending ? 'disabled' : ''}>TH</a>
                </li>
                <li>
                    <a onClick={() => onSelectChange('en')} className={isPending ? 'disabled' : ''}>EN</a>
                </li>
            </ul>
        </div>
    );
}

export default LocaleSwitcher;


// 'use client';

// import { useLocale } from 'next-intl';
// import { usePathname, useRouter } from 'next/navigation';
// import React, { ChangeEvent, useTransition } from 'react'

// function LocaleSwitcher() {
//     const [isPending, startTransition] = useTransition()
//     const router = useRouter();
//     const pathname = usePathname();

//     const localAcitve = useLocale()

//     const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
//         const nextLocale = e.target.value;
//         const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}/, '');

//         startTransition(() => {
//             router.push(`/${nextLocale}${pathWithoutLocale}`);
//         })
//     }
//     return (
//         <select defaultValue={localAcitve} disabled={isPending} className="select select-bordered w-full max-w-xs" onChange={onSelectChange}>
//             <option value="th">TH</option>
//             <option value="en">EN</option>
//         </select>
//     )
// }

// export default LocaleSwitcher