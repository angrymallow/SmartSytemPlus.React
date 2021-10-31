import { Breadcrumbs, Typography } from "@material-ui/core";
import { NavigateNextOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";

type NavigationLinkProp = {
  to: string;
  text: string;
};
type PageNavigationProps = {
  links: NavigationLinkProp[] | NavigationLinkProp;
  current: string;
};

const LinkWithText = (props: NavigationLinkProp) => {
  const { to, text } = props;
  return (
    <Link color="primary" to={to.toLowerCase()}>
      <Typography color="primary">{text}</Typography>
    </Link>
  );
};

const PageNavigation = (props: PageNavigationProps) => {
  const { links, current } = props;
  return (
    <Breadcrumbs separator={<NavigateNextOutlined fontSize="small" />} aria-label="breadcrumb">
      {Array.isArray(links) ? (
        links.map((link) => (
         <LinkWithText to={link.to} text={link.text}></LinkWithText>
        ))
      ) : (
         <LinkWithText to={links.to} text={links.text}></LinkWithText>
      )}
      <Typography color="inherit">{current}</Typography>
    </Breadcrumbs>
  );
};

export default PageNavigation;
