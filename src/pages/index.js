import { Inter } from "next/font/google";
import { Amplify, Auth } from "aws-amplify";
import awsExports from "../aws-exports";
import Registration from "./registration";

const inter = Inter({ subsets: ["latin"] });
Amplify.configure({ ...awsExports, ssr: true });
Auth.configure({ ...awsExports, ssr: true });
export default function Home() {
  return (
    <div style={{ height: "100%" }}>
      <Registration />
    </div>
  );
}
