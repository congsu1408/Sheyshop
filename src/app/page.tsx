import {Button} from "antd";
import {bgBlue} from "next/dist/lib/picocolors";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
        <div className="flex gap-4">
          <Button type="primary">Click me</Button>
          <Button type="default">Click me</Button>
        </div>
    </div>
  );
}

