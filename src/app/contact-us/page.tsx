import React, { Fragment } from "react";
import Contact from "@/sections/contact";
import { Metadata } from "next";
import Header from "@/sections/header";
import Footer from "@/sections/footer";
import ScheduleMeeting from "@/sections/Schedule-meeting";

export const metadata: Metadata = {
  title: "Contact Us | CustomBleak",
};

export default function ContactPage() {
  return (
    <Fragment>
      <Header />
      <Contact />
      <ScheduleMeeting />
      <Footer />
    </Fragment>
  );
}
