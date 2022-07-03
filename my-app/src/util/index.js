// import Generics from "../components/Generics/index";
import Home from "../components/Home/index";
import Shop from "../components/Shop/index";
import Blogs from "../components/Blogs/index";
import PlantCare from "../components/PlantCare/index";

export const navbar = [
  { id: 1, path: "/home", title: "Home", Element: Home, hidden: false },
  { id: 2, path: "/shop", title: "Shop", Element: Shop, hidden: false },
  {
    id: 3,
    path: "/plantcare",
    title: "Plant Care",
    Element: PlantCare,
    hidden: false,
  },
  { id: 4, path: "/blogs", title: "Blogs", Element: Blogs, hidden: false },
];
