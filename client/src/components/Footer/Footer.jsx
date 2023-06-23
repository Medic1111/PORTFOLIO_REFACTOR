import DateCal from "./Date/Date";
import Tabs from "./Tabs/Tabs";
import UtilBtns from "./UtilBtns/UtilBtns";

import { classes } from "./classes";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <UtilBtns />
      <Tabs />
      <DateCal />
    </footer>
  );
};

export default Footer;
