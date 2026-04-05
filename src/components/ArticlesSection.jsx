import SectionLabel from "./SectionLabel";
import ArticleCard from "./ArticleCard";

export default function ArticlesSection({ MAIN_ARTICLES }) {
  return (
    <>
      <SectionLabel text="Latest Investigations" />
      <div className="grid grid-cols-3 gap-px bg-stone-300 border border-stone-300">
        {MAIN_ARTICLES.map((a) => <ArticleCard key={a.id} a={a} />)}
      </div>
    </>
  );
}
