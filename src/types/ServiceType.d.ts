import { StaticImageData } from "next/image";

export interface ServiceType{
  media?: StaticImageData;
  mediaUrl?:string;
  mediaIsVideo?:boolean;
  name:string;
  description:string;
}