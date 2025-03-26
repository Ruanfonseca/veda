
import { Statistic } from "@/types/project";

interface StatisticsSectionProps {
  statistics: Statistic[];
}

const StatisticsSection = ({ statistics }: StatisticsSectionProps) => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {statistics.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-6 shadow-lg text-center"
        >
          <div className="text-4xl font-bold text-accent mb-2">
            {stat.number}
          </div>
          <div className="text-muted">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatisticsSection;
