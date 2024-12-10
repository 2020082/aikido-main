import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./breadcrumb.module.css";

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

const Breadcrumb = ({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <div className={`${styles.container} ${styles.horizontal}`}>
      <div className={`${styles.breadcrumb} ${containerClasses}`}>
        {pathNames.length > 0 && (
          <>
            <div className={styles.listClasses}>
              <div className={styles.bread_text}>
                <Link href={"/"}>{homeElement}</Link>
              </div>
            </div>
            {separator}
          </>
        )}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;
          let itemClasses =
            paths === href ? `${listClasses} ${activeClasses}` : listClasses;
          let decodedLink = decodeURIComponent(link); // Decode the URL-encoded link
          let itemLink = capitalizeLinks
            ? decodedLink[0].toUpperCase() + decodedLink.slice(1)
            : decodedLink;
          return (
            <React.Fragment key={index}>
              <div className={itemClasses}>
                <div className={styles.bread_text}>
                  <Link href={href}>{itemLink}</Link>
                </div>
              </div>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumb;
