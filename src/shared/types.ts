import React from "react";

export enum SelectedPage {
  Home = "home",
  Benefits = "benefits",
  OurClasses = "ourclasses",
  ContactUs = "contactus",
}

export interface BenifitType {
  icon: React.ReactNode;
  title: string;
  description: string;
}
