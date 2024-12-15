import clsx from "clsx";
import React, { memo } from "react";
import style from "./index.module.scss";
import Header from "@/components/Header";
export default memo(function Homepage() {
  return (
    <div className={clsx(style.container)}>
      <Header />
      <div className={clsx(style.content)}></div>
    </div>
  );
});
