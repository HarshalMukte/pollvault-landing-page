import cn from "classnames";
import styles from "./JoinCommunity.module.sass";
import Image from "@/components/Image";
import Animation from "@/components/Animation";

import { avatars, images } from "@/constants/joinCommunity";
import NewWidget from "../Wishlist/NewWidget";

type JoinCommunityProps = {};

const JoinCommunity = ({}: JoinCommunityProps) => {
    // const [email, setEmail] = useState("")

    return (
        <div className={styles.join}>
        <div className={cn("container", styles.container)}>
          <div className={styles.wrap}>
            <div className={cn("h1", styles.title)}>
              Ready to WOW your audience?
            </div>
            <div className={cn("h4M", styles.info)}>
              Join the waitlist for the exclusive Pollvault community.
            </div>
            <div className={styles.avatars}>
              {avatars.map((avatar, index) => (
                <div className={styles.avatar} key={index}>
                  <Image src={avatar} layout="fill" alt="Avatar" priority />
                </div>
              ))}
            </div>
            <div className={styles.formContainer}>
              {/* <Form
                className={styles.form}
                placeholder="Join the waitlist"
                type="email"
                icon="mail"
                value={email}
                setValue={setEmail}
                onSubmit={() => console.log("Submit")}
              /> */}
              <NewWidget color="secondary"/>
            </div>
            {/* <Link href="/pricing">
              <a className={cn("button", styles.button)}>Get started</a>
            </Link> */}
          </div>
          <div className={styles.images}>
            {images.map((image, index) => (
              <Animation
                className={styles.image}
                animateIn="fadeIn"
                key={index}
                speed={index < 4 ? -5 : 0}
              >
                <Image
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  alt={image.alt}
                />
              </Animation>
            ))}
          </div>
        </div>
      </div>
    )
};

export default JoinCommunity;
