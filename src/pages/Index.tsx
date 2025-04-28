
import Hero from "@/components/Hero";
import NavigationBar from "@/components/NavigationBar";
import FeaturedProjects from "@/components/FeaturedProjects";
import ReadingList from "@/components/ReadingList";
import RecentPosts from "@/components/RecentPosts";

const Index = () => {
  return (
    <>
      <main>
        <Hero />
        <FeaturedProjects />
        <ReadingList />
        <RecentPosts />
      </main>
    </>
  );
};

export default Index;
