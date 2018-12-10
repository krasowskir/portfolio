import React from "react";
import { Container, Row } from "reactstrap";
import "./footer.scss";

const MyFooter = props => (
  <div className="footer">
    <ul className="list-inline">
      <li>
        <a href="#" title="Twitter profile">
          <i class="fab fa-twitter " />
        </a>
      </li>
      <li>
        <a href="#" title="Facebook page">
          <i class="fab fa-facebook" />
        </a>
      </li>
      <li>
        <a href="#" title="LinkedIn Profile">
          <i class="fab fa-linkedin" />
        </a>
      </li>
      <li>
        <a href="#" title="Google Plus">
          <i class="fab fa-google-plus-square" />
        </a>
      </li>
      <li>
        <a href="#" title="Github Profile">
          <i class="fab fa-github-square" />
        </a>
      </li>
    </ul>
  </div>
);

export default MyFooter;
