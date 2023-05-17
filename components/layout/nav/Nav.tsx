import Link from "next/link"
import Image from "next/image"
import styles from "./Nav.module.css"
import { AuthState } from "./client/auth-state"
import { WithLocale } from "@/i18n-config"
import { Session } from "next-auth"

type NavProps = WithLocale & {
  session: Session | null
}

const Nav = ({ currentLocale, session }: NavProps) => {
  return (
    <nav id={styles.wrapper}>
      <div id={styles.aurora} />
      <div id={styles.container}>
        <Link href={`/${currentLocale}`} id={styles.home_icon}>
          <Image src="/letter_64.png" width={36} height={36} alt="Home" />
        </Link>
        <AuthState currentLocale={currentLocale} session={session}/>
      </div>
    </nav>
  )
}

export default Nav
