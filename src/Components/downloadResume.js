import Resume from "../assets/img/resume.pdf";
import { Button } from "@material-tailwind/react";

export default function ResumeButton() {
  return (
    <a href={Resume} download="Nataniel's Resume">
      <Button className="rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </Button>
    </a>
  );
}
