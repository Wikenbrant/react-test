import TsJsLoaders from "./TsJsLoader";
import CssLoader from "./css/CssLoader";
import webpack from "webpack";
import ScssLoader from "./ScssLoader";

const Loaders: webpack.RuleSetRule[] = [...TsJsLoaders, CssLoader, ScssLoader];

export default Loaders;
