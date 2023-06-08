
export enum SelectedPage{
    Home="home",
    Benifits="benifits" ,
    OurClasses="ourclasses",
    Contact="contact"
  }

  

export interface BenifitsType{
    icon:JSX.Element,
    description:string ,
    title:string,
  }

export interface ClassType{
    name:string,
    description:string ,
    image:string,
  }

