import Link from "next/link";
import cn from "classnames";
import styles from "./Logo.module.sass";
import Image from "@/components/Image";

type LogoProps = {
    className?: string;
    titleClassName?: string;
    onClick?: () => void;
    title?: boolean;
};

const Logo = ({
    className,
    titleClassName,
    onClick,
    title,
}: LogoProps) => (
    <Link href="/">
        <a className={cn(styles.logo, className)} onClick={onClick}>
            <Image
                src="/images/logo.svg"
                width="150"
                height="50"
                alt="Pollvault"
                priority
            />
            {title && (
                <div className={cn("h5M", styles.title, titleClassName)}>
                    Pollvault
                </div>
            )}
        </a>
    </Link>
);

export default Logo;
