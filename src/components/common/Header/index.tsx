import React, { useCallback, useRef } from "react";
import styles from "./styles.module.css";
import Image from 'next/image';
import Logo from "@/assets/logo.svg";
import InputText from "../InputText";
import Link from "next/link";

interface HeaderProps {
    children?: React.ReactNode;
    className?: string;
    placeholder?: string | string[];
    onSearch?: (text: string) => void
}

const Header = ({ placeholder, className, onSearch, ...props }: HeaderProps) => {

    let inputRef = useRef<HTMLInputElement>(null);

    const onSubmit = useCallback((event: React.SyntheticEvent) => {
        event.preventDefault();
        if (onSearch && inputRef.current?.value) {
            onSearch(inputRef.current?.value)
        }
    }, [onSearch]);

    return (
        <header
            {...props}
            className={[
                styles.header,
                className,
            ].join(' ')}>
            <Link href={"/"}>
                <Image src={Logo} alt="Github logo" />
            </Link>
            <div className='md:w-2/4 w-full'>
                <form onSubmit={onSubmit}>
                    <InputText
                        ref={inputRef}
                        defaultValue={placeholder} />
                </form>
            </div>
        </header>
    );
};

export default Header;