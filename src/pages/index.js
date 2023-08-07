import { Inter } from "next/font/google";
import Form from "./Form";
import { Amplify } from "aws-amplify";
import awsExports from "../aws-exports";

const inter = Inter({ subsets: ["latin"] });
Amplify.configure({ ...awsExports, ssr: true });

export default function Home() {
  return (
    <div style={{ height: "100%" }}>
      <Form />
    </div>
  );
}
