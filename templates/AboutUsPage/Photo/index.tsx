import cn from "classnames";
import styles from "./Photo.module.sass";
import Image from "@/components/Image";

type PhotoProps = {};

const Photo = ({}: PhotoProps) => (
    <div className={cn("section", styles.photo)}>
        <Image
            src="/images/picture-1.png"
            width={838}
            height={818}
            alt="Picture"
        />
    </div>
);

export default Photo;
