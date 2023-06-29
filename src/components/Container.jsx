import Head from "next/head";
import React from "react";
import Navbar from "../components/Navbar";
import PropTypes from "prop-types";

export default function Container({ children, className }) {
  return (
    <>
      <Head>
        <title>AirwoAs</title>
        <meta name="description" content="AirwoAs app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="antialiased text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-900">
        <Navbar />
        <main className={className}>{children}</main>
      </div>
    </>
  );
}
// je définis les types de propriétés attendues
Container.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
