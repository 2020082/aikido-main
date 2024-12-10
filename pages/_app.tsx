/** @format */

import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Menu from "../components/menu";
import { AppProps } from "next/app";
import "./globals.css";
import "./applycs.css";
import "./about/about.css";

import "/components/carousel/embla.css";
import "../components/marquee/marquee.css";
import Sidebar from "@/components/sidebarmenu";

function MyApp({ Component, pageProps }: AppProps) {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [sidebarMenuOpen, setSidebarMenuOpen] = useState(false);
  const toggleSearchBar = () => {
    setSearchVisible(!isSearchVisible);
  };
  const toggleSidebarMenu = () => {
    setSidebarMenuOpen(!sidebarMenuOpen);
  };
  return (
    <div className="app-container">
      <Header isSearchVisible={isSearchVisible} />
      <div className="menu-container">
        <Menu
          toggleSearchBar={toggleSearchBar}
          toggleSidebarMenuParent={toggleSidebarMenu}
        />
      </div>
      <div className="sidebar">
        <Sidebar isOpen={sidebarMenuOpen}></Sidebar>
      </div>

      <main className="main-content">
        <Component {...pageProps} />
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
