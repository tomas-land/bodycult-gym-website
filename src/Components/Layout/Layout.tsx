import { useGlobalContext } from "context"

import styles from "./_Layout.module.scss"

const Layout = ({ children }: any) => {
    const { setMenuIsOpen } = useGlobalContext();
    return (
        <div className={styles.layout} onClick={() => setMenuIsOpen(false)}>{children}</div>
    )
}

export default Layout