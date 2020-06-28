
// or: const logoImagePath = require("./logo.svg").default;
import photoImagePath from './topx.png';
 
export default () => (
  <div>
    <img src={logoImagePath} alt="logo" />
    <img src={photoImagePath} alt="photo" />
  </div>
);
