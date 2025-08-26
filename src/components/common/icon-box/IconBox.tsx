import Link from 'next/link';
import React from 'react';


interface Props{
    icon: string;
    size?: number;
    link?: string;
    title?: string;
    iconClassName?:string

}

export default function IconBox({icon,size=24,link,title,iconClassName=''}:Props) {
    if (link)
        
        return (
            <Link href={link ?? '#'}  >             
                <i className={`${icon} text-[${size}] ${iconClassName}`} ></i>
            </Link>
            
        );
    return (
         <i className={`${icon} text-[${size}]`}></i>
    )
}
