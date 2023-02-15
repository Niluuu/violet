import { Inter } from "@next/font/google";
import { Button } from "./components/Button";
import { Switch } from "./components/Switch";
import { Checkbox } from "./components/Checkbox";
import { Radio } from "./components/Radio";
import { FiLinkedin, FiGithub, FiSearch, FiFacebook } from "react-icons/Fi";
import { IconButton } from "./components/IconButton";
import { Uploader } from "./components/Uploader";
import { Alert } from "./components/Alerts";

export default function Home() {
  return (
    <div className="container">
      <div className="components">
        <div className="row">
          <Button type="primary" title="Button" />
          <IconButton title="LinkedIn" icon={<FiSearch />} />
        </div>

        <div className="row">
          <IconButton icon={<FiGithub />} circle />
          <IconButton icon={<FiFacebook />} circle />
          <IconButton icon={<FiLinkedin />} circle />
        </div>

        <div className="row">
          <Checkbox />
          <Checkbox isChecked />
        </div>

        <div className="row">
          <Radio name="radio" value="1" />
          <Radio name="radio" value="2" isChecked />
        </div>

        <div className="row">
          <Switch />
          <Switch isChecked />
        </div>

        <Alert errorType="succsess" message="Congratilations!" />
        <Alert errorType="error" message="Something went wrong..." />
        <Alert errorType="warning" message="Warning connect with your admin" />

        <div className="row">
          <Uploader title="Uploader" />
        </div>
      </div>
    </div>
  );
}
