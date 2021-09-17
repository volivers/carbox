import React from 'react';
import useStyles from '../../styles/FooterStyles';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faDribbble } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <div className={classes.socialRow}>
        <a href="https://www.linkedin.com/in/volivers/" target="_blank" rel="noopener noreferrer" className={classes.socialLink}>
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/volivers" target="_blank" rel="noopener noreferrer" className={classes.socialLink}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://dribbble.com/volivers" target="_blank" rel="noopener noreferrer" className={classes.socialLink}>
          <FontAwesomeIcon icon={faDribbble} />
        </a>
      </div>
      <div className={classes.copyright}>
        <p>Vasco Oliveira © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;