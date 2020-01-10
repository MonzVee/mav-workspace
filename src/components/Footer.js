import React from 'react';
import config from '../../config';


export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { style, icon, name, url } = social;
          return (
            <li key={url}>
              <a href={url} className={`icon ${style} ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>&copy; MAVDigital 2020</li>
        <li>
          Total Branding <a href="http://html5up.net">All Rights Reserved</a>
        </li>
      </ul>
    </footer>
  );
}
