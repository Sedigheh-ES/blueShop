import Link from 'next/link';
import React from 'react';
import IcoMoon from 'react-icomoon';

interface Props{
    icon: string;
    size?: number;
    link?: string;
    title?: string;
    iconClassname?:string

}

export default function IconBox({icon,size=24,link,title,iconClassname=''}:Props) {
    if (link)
        
        return (
            <Link href={link ?? '#'}>             
                <i className={`${icon} text-[${size}]`}></i>
            </Link>
            
        );
    return (
         <i className={`${icon} text-[${size}]`}></i>
    )
}
