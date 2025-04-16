import PageHeader from "./components/PageHeader";
import PageSubtitle from "./components/PageSubtitle";
import ProgressBar from "./components/ProgressBar";
import LoaderIcon from "./components/LoaderIcon";
import { useSkips } from "./hooks/useSkips";
import ErrorCard from "./components/ErrorCard";
import SkipList from "./components/SkipList";
import { useState } from "react";
import { Skip } from "./types";
import BottomBar from "./components/BottomBar";

function SelectSkip() {
  const { data: skips, isLoading, isError } = useSkips();
  const [selectedSkip, setSelectedSkip] = useState<Skip>();

  return (
    <div className="">
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Top progressbar Step  */}
        <ProgressBar />
        <div className="max-w-7xl mx-auto px-4 pb-32">
          <PageHeader title="Choose Your Skip Size" />
          <PageSubtitle title="Select the skip size that best suits your needs" />
          {isLoading ? (
            <LoaderIcon />
          ) : isError ? (
            <ErrorCard />
          ) : (
            <SkipList
              onSelect={(skip) => setSelectedSkip(skip)}
              selectedCardId={selectedSkip?.id ?? 0}
              skips={skips || []}
            />
          )}
        </div>
        <BottomBar skip={selectedSkip!} />
      </main>
    </div>
  );
}

export default SelectSkip;
