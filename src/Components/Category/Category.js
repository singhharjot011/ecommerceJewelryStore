import CategoryCard from "./CategoryCard";

export default function Category({ allCategories, onSelectCategory }) {
  return (
    <section id="category" className="flex flex-wrap justify-evenly">
      <div className="w-full text-center text-4xl my-5"> Categories</div>
      {allCategories.map((cat) => (
        <CategoryCard
          category={cat}
          key={cat}
          onSelectCategory={onSelectCategory}
        />
      ))}
    </section>
  );
}
