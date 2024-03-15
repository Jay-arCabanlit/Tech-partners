import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Full service range including",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Techinical skills, design, business",
      desc: "Here you can add the next benefit point.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Themeselves in the merchants",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Give Your Site A New Look",
  desc: "Service range including techinical skills, design business understanding.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Range including techinical skills",
      desc: "",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Business understanding",
      desc: "",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Partner in the long run",
      desc: "",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
