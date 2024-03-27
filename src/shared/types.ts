export enum SelectedPage {
  Home = "home",
  About = "about",
  Services = "services",
  ContactUs = "contactus",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ServiceType {
  name: string;
  description?: string;
  image: string;
}
