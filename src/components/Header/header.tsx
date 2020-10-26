import { Link } from "gatsby";
import React from "react";

type Props = {
  siteTitle: string;
};

const Header: React.FC<Props> = (props: Props): React.ReactElement => {
  const { siteTitle = '' } = props

  return (
    <header>
      <div>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </header>
  )
}

export default Header
