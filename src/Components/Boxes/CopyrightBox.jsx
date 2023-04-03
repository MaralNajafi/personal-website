import React from "react";
import { Link } from "react-router-dom";

export default function CopyrightBox() {
  return (
    <div className="copyright-box d-flex flex-col jc-center ai-center white-space-nw">
      <p>Copyright &copy; 2023. All rights reserved.</p>
      <p>
        Designed and developed by{" "}
        <Link to={"https://github.com/MaralNajafi"}>
          <span className="td-underline">Maral Najafi</span>
        </Link>
      </p>
    </div>
  );
}
