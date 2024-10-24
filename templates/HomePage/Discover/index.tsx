import cn from "classnames";
import styles from "./Discover.module.sass";
import Item from "./Item";
import List from "./List";
import Models from "./Models";

import { list1, list2, list3 } from "@/constants/discover";

type DiscoverProps = {};

const Discover = ({}: DiscoverProps) => {
    return (
        <div className={cn("section", styles.discover)}>
            <div className={cn("container", styles.container)}>
                <h2 className={cn("h2", styles.title)}>Discover how it works</h2>
                <div className={styles.list}>
                    <Item
                        className={styles.item}
                        title="Create & Customize with AI"
                        info="Easily design your surveys or interviews with our AI-guided tools."
                        video="BHACKCNDMW8"
                    >
                        <List list={list1} />
                    </Item>
                    <Item
                        className={styles.item}
                        title="Engage & Adapt in Real-Time"
                        info="Gather rich answers with AI-powered conversations that adjust as your audience responds"
                        video="BHACKCNDMW8"
                    >
                       <List list={list2} />
                    </Item>
                    <Item
                        className={styles.item}
                        title="Analyze with a Click"
                        info="Tag team with Polly to generate reports that you can actually use in minutes!"
                        video="BHACKCNDMW8"
                    >
                       <List list={list3} />
                    </Item>
                </div>
            </div>
        </div>
    );
};

export default Discover;
