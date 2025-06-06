import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      <div className="w-full max-w-[800px] mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* Logo */}
        <div className="flex justify-center mb-16">
          <Image
            src="./images/logo/DunlyLogo.png"
            alt="Dunly Logo"
            width={120}
            height={120}
            priority
            className="dark:brightness-200"
          />
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Task Management, Simplified
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Meet Dunly, your intelligent companion for managing both recurring responsibilities and one-time tasks.
          </p>
        </div>

        {/* Key Features Section */}
        <div className="w-full max-w-[1000px] mx-auto mb-16">
          <div className="space-y-6">
            <FeatureCard
              title="Smart Task Management"
              description="Seamlessly handle both recurring and one-time tasks with intelligent urgency calculation and visual progress tracking."
              icon="📋"
            />
            <FeatureCard
              title="Flexible Recurring Tasks"
              description="Set custom frequencies from daily to yearly, track completion history, and enjoy automatic scheduling of next due dates."
              icon="🔄"
            />
            <FeatureCard
              title="Intuitive Organization"
              description="Filter tasks by custom categories, view tasks due today or upcoming, and sort by urgency to focus on what matters most."
              icon="📱"
            />
          </div>
        </div>

        {/* Use Cases Section */}
        <div className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Perfect for Every Task
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-lg">
            <UseCaseTag emoji="📅" text="Daily chores" />
            <UseCaseTag emoji="🏋️" text="Exercise routines" />
            <UseCaseTag emoji="💊" text="Medication" />
            <UseCaseTag emoji="🌱" text="Plant care" />
            <UseCaseTag emoji="🚗" text="Vehicle maintenance" />
            <UseCaseTag emoji="📝" text="Project deadlines" />
          </div>
        </div>

        {/* CTA Section */}
        {/* <div className="text-center max-w-sm mx-auto">
          <a
            href="#" // Replace with actual App Store link
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:text-lg w-full"
          >
            Download on the App Store
          </a>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
            Coming soon to the iOS App Store
          </p>
        </div> */}
      </div>
    </div>
  );
}

function FeatureCard({ title, description, icon }: { title: string; description: string; icon: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm w-full">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
}

function UseCaseTag({ emoji, text }: { emoji: string; text: string }) {
  return (
    <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-3 py-2 rounded-full">
      <span>{emoji}</span>
      <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">{text}</span>
    </div>
  );
}
