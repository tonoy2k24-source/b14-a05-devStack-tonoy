import { use, useState } from "react";
import { toast } from "react-toastify";

type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

type LanguageProps = {
  languagePromise: Promise<Technology[]>;
};

const Language = ({ languagePromise }: LanguageProps) => {
  const technologies = use(languagePromise);

  const [stack, setStack] = useState<Technology[]>([]);

  // Add To Stack
  const handleAddToStack = (technology: Technology) => {
    const alreadySelected = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadySelected) {
      toast.warning(`${technology.name} is already in your stack`);
      return;
    }

    setStack([...stack, technology]);

    toast.success(`${technology.name} added to your stack`);
  };

  // Remove One
  const handleRemove = (id: string) => {
    const technology = stack.find(
      (item) => item.id === id
    );

    setStack(
      stack.filter((item) => item.id !== id)
    );

    if (technology) {
      toast.success(`${technology.name} removed from your stack`);
    }
  };

  // Remove All
  const handleRemoveAll = () => {
    setStack([]);

    toast.success("All technologies removed");
  };

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900">
            Explore the{" "}
            <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Pick technologies to build your ideal stack.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">

          {/* Technology Cards */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">

            {technologies.map((technology) => {
              const isSelected = stack.some(
                (item) => item.id === technology.id
              );

              return (
                <div
                  key={technology.id}
                  className={`rounded-xl border p-4 transition duration-200 ${
                    isSelected
                      ? "border-pink-300 bg-pink-50"
                      : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-md"
                  }`}
                >

                  {/* Icon + Badge */}
                  <div className="flex items-center justify-between">

                    <img
                      src={technology.icon}
                      alt={technology.name}
                      className="h-8 w-8 object-contain"
                    />

                    <span className="rounded-full bg-gray-50 px-3 py-1 text-[10px] text-gray-500">
                      {technology.badge}
                    </span>

                  </div>

                  {/* Name */}
                  <h3 className="mt-4 text-base font-semibold text-gray-900">
                    {technology.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 h-14 text-xs leading-5 text-gray-500">
                    {technology.description}
                  </p>

                  {/* Information */}
                  <div className="mt-4 flex items-center justify-between">

                    <span className="rounded bg-gray-50 px-2 py-1 text-[10px] text-gray-500">
                      {technology.category}
                    </span>

                    <span className="text-[10px] text-gray-500">
                      {technology.difficulty}
                    </span>

                    <span className="text-[10px] text-gray-700">
                      ⭐ {technology.rating}
                    </span>

                  </div>

                  {/* Add Button */}
                  <button
                    disabled={isSelected}
                    onClick={() => handleAddToStack(technology)}
                    className={`mt-4 w-full rounded-lg py-2.5 text-xs font-medium transition ${
                      isSelected
                        ? "cursor-not-allowed bg-gray-300 text-gray-600"
                        : "cursor-pointer bg-gray-950 text-white hover:bg-pink-500"
                    }`}
                  >
                    {isSelected
                      ? "✓ Added to Stack"
                      : "Add to Stack"}
                  </button>

                </div>
              );
            })}

          </div>

          {/* Your Stack */}
          <div>

            <div className="sticky top-5 rounded-xl border border-gray-100 bg-white p-5 shadow-sm">

              {/* Stack Header */}
              <h3 className="text-base font-semibold text-gray-900">
                Your Stack
              </h3>

              {/* Selected Count */}
              {stack.length > 0 ? (
                <p className="mt-1 text-xs text-gray-400">
                  {stack.length}{" "}
                  {stack.length === 1
                    ? "Technology"
                    : "Technologies"}{" "}
                  Selected
                </p>
              ) : (
                <p className="mt-1 text-xs text-gray-400">
                  No technologies selected yet.
                </p>
              )}

              {/* Empty State */}
              {stack.length === 0 ? (

                <div className="mt-4 flex h-16 items-center justify-center rounded-lg border border-dashed border-gray-200">
                  <p className="text-xs text-gray-400">
                    Your stack is empty.
                  </p>
                </div>

              ) : (

                <>
                  {/* Selected Items */}
                  <div className="mt-4 space-y-2">

                    {stack.map((technology) => (

                      <div
                        key={technology.id}
                        className="flex items-center justify-between rounded-lg border border-gray-200 bg-white px-3 py-2"
                      >

                        {/* Technology Info */}
                        <div className="flex items-center gap-3">

                          <img
                            src={technology.icon}
                            alt={technology.name}
                            className="h-7 w-7 object-contain"
                          />

                          <div>
                            <p className="text-xs font-semibold text-gray-800">
                              {technology.name}
                            </p>

                            <p className="text-[8px] text-gray-400">
                              {technology.category}
                            </p>
                          </div>

                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() =>
                            handleRemove(technology.id)
                          }
                          className="cursor-pointer text-2xl font-light text-gray-400 transition hover:text-red-500"
                        >
                          ×
                        </button>

                      </div>

                    ))}

                  </div>

                  {/* Remove All */}
                  <button
                    onClick={handleRemoveAll}
                    className="mt-8 w-full cursor-pointer rounded-lg border border-red-300 py-2.5 text-sm font-medium text-red-500 transition hover:bg-red-50"
                  >
                    Remove All
                  </button>
                </>

              )}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Language;