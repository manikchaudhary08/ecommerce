interface FilterBarProps {
  onSortChange: (order: "lowToHigh" | "highToLow") => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onSortChange }) => {
  return (
    <div className="flex gap-4 p-4 bg-red-800 text-white rounded-lg">
      <button onClick={() => onSortChange("lowToHigh")} className="bg-black px-4 py-2 rounded-lg">
        Price: Low to High
      </button>
      <button onClick={() => onSortChange("highToLow")} className="bg-black px-4 py-2 rounded-lg">
        Price: High to Low
      </button>
    </div>
  );
};

export default FilterBar;
