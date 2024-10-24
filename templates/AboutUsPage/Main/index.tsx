import cn from "classnames";
import styles from "./Main.module.sass";

type MainProps = {};

const Main = ({}: MainProps) => (
    <div className={cn("section", styles.main)}>
        <div className={cn("container", styles.container)}>
            <h1 className={cn("h1", styles.title)}>About us</h1>
            <div className={styles.row}>
                <div className={cn("h3", styles.subtitle)}>What is Pollvault</div>
                <div className={styles.details}>
                    <div className={cn("h5M", styles.info)}>
                    Meet Pollvault, your very own AI-powered platform designed to help you connect with your audience on a deeper level - whether you’re conducting leadership 360* or collecting service feedback.
                    </div>
                    <div className={styles.content}>
                        <p>
                        Pollvault’s conversational AI makes every participant feel valued, as it adapts and dives deeper based on their responses.
                        </p>
                        <p>
                        Pollvault allows you to deliver a lasting impression with an interactive experience that leaves your audience feeling heard and appreciated.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Main;
