import cn from "classnames";
import styles from "./Main.module.sass";
import { aboutText } from "@/constants/about";
import Link from "next/link";
import Image from "next/image";

type MainProps = {};

const Main = ({}: MainProps) => (
  <div className={cn("section", styles.main)}>
    <div className={cn("container", styles.container)}>
      <h1 className={cn("h1", styles.title)}>About us</h1>
      <div className={styles.row}>
        <div className={cn("h3", styles.subtitle)}>What is Pollvault</div>
        <div className={styles.details}>
          <div className={cn("h5M", styles.info)}>
            Meet Pollvault, your very own AI-powered platform designed to help
            you connect with your audience on a deeper level - whether you’re
            conducting leadership 360* or collecting service feedback.
          </div>
          <div className={styles.content}>
            <p>
              Pollvault’s conversational AI makes every participant feel valued,
              as it adapts and dives deeper based on their responses.
            </p>
            <p>
              Pollvault allows you to deliver a lasting impression with an
              interactive experience that leaves your audience feeling heard and
              appreciated.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        {/* <div className={cn("h3", styles.subtitle)}>What is Pollvault</div> */}
        <div className={styles.details}>
          <div className={cn("h5M", styles.info)}>
            Pollvault isn’t just another survey tool. It’s an AI-powered
            platform designed to help you connect with your audience on a deeper
            level—whether you’re gathering leadership feedback or product
            insights. Deliver a groundbreaking experience that shows you care.
          </div>
          <div className={styles.content}>
            <p>
              Pollvault’s conversational AI makes every participant feel valued,
              as it adapts and dives deeper based on their responses.
            </p>
            <p>
              Pollvault allows you to deliver a lasting impression with an
              interactive experience that leaves your audience feeling heard and
              appreciated.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.list}>
          {aboutText.map((item: any, index: number) => (
            <div className={styles.listItem} key={index}>
              <div className={cn("h4M", styles.listTitle)}>
                <Image 
                src={item.icon}
                width={50}
                height={50}
                alt="icon"
                />
                {item.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Main;
