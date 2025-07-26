import { useParams } from "react-router-dom";
import { projectsData } from "../../data/projectsData";
import Title from "./Title";
import Navbar from "../Navbar";
import { useEffect } from "react";
import Overview from "./Overview";
import Footer from "../Footer";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectsData.find(
    (proj) => proj.id.toString() === projectId || proj.slug === projectId
  );

  if (!project) return <div>Project not found</div>;

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id={project.slug}>
      <Navbar />
      <main>
        <section id="top">
          <Title
            id={project.id}
            name={project.title}
            description={project.description}
            liveLink={project.liveLink}
          />
        </section>
        <Overview />
        <Footer />
      </main>
    </div>
  );
};

export default ProjectDetail;
