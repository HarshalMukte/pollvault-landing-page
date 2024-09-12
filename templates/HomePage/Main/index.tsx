import Link from "next/link";
import cn from "classnames";
import styles from "./Main.module.sass";
import Image from "@/components/Image";
import Scroll from "@/components/Scroll";
import Animation from "@/components/Animation";
import Form from "@/components/Form";
import { useState } from "react";

type MainProps = {
  scrollToRef: any;
};

const Main = ({ scrollToRef }: MainProps) => {
  const [email, setEmail] = useState<string>("");

  return (
    <div className={cn("section", styles.main)}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <h1 className={cn("hero", styles.title)}>PollVault</h1>
          <div className={cn("h4M", styles.info)}>
            WOW your audience! with simple, fun, conversational polls
          </div>
          <div className={styles.btns}>
            <Form
              className={styles.form}
              placeholder="Your email"
              type="email"
              icon="mail"
              value={email}
              setValue={setEmail}
              onSubmit={() => console.log("Submit")}
            />
            <Link href="/about-us">
              <a className={cn("button-gray", styles.button)}>Learn more</a>
            </Link>
          </div>
        </div>
        <div className={styles.preview}>
          <Image
            src="/images/main-pic-1.png"
            width={980}
            height={735}
            alt="Hero"
          />
          <div className={styles.ball}></div>
          <div className={styles.circles}>
            {Array.from(Array(4).keys()).map((x) => (
              <Animation
                className={styles.circle}
                animateIn="fadeAlways"
                speed={-4}
                key={x}
                initiallyVisible={true}
              >
                <span></span>
              </Animation>
            ))}
          </div>
        </div>
        <Scroll
          title="Scroll down"
          onScroll={() =>
            scrollToRef.current.scrollIntoView({
              behavior: "smooth",
            })
          }
        />
      </div>
    </div>
  );
};

export default Main;
