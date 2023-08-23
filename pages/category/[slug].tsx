import { useRouter } from "next/router";
import Course from "@/components/Course/Course";

const CourseCategory = () => {
  const router = useRouter();
  const { slug } = router.query;
  return <Course category={slug as string} />;
};

export default CourseCategory;
