import ArticlesSection from "./ArticlesSection";
import NewsSection from "./NewsSection";
import PullQuote from "./PullQuote";
import SpotlightSection from "./SpotlightSection";
import Sidebar from "./Sidebar";

export default function MainContent({ MAIN_ARTICLES, LATEST, SPOTLIGHT, TAGS, MOST_READ }) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {/* LEFT */}
      <div className="col-span-2 flex flex-col">
        <ArticlesSection MAIN_ARTICLES={MAIN_ARTICLES} />
        <NewsSection LATEST={LATEST} />
        <PullQuote />
        <SpotlightSection SPOTLIGHT={SPOTLIGHT} />
      </div>

      {/* RIGHT SIDEBAR */}
      <Sidebar TAGS={TAGS} MOST_READ={MOST_READ} />
    </div>
  );
}
