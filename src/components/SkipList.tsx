import { Skip } from "../types";
import Card from "./Card/Card";
import CardAmount from "./Card/CardAmount";
import CardButton from "./Card/CardButton";
import CardImage from "./Card/CardImage";
import CardSubtitle from "./Card/CardSubtitle";
import CardTitle from "./Card/CardTitle";
import IconPicker from "./IconPicker";

interface SkipList {
  skips: Skip[];
  onSelect: (skip: Skip) => void;
  selectedCardId: number | null;
}

const SkipList: React.FC<SkipList> = ({ skips, onSelect, selectedCardId }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
    {skips?.map((data) => (
      <Card
        key={data.id}
        onClick={() => onSelect(data)}
        selected={selectedCardId === data.id}
      >
        <CardImage
          imageAlt={`${data.size} yard skip`}
          imageUrl={`https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/${data.size}-yarder-skip.jpg`}
          imageTitle={`${data.size} Yards`}
          notAllowedOnRoad={!data.allowed_on_road}
        />

        <CardTitle title={`${data.size} Yard Skip`} />
        <CardSubtitle title={`${data.hire_period_days} day hire period`} />

        <CardAmount amount={`£${data.price_before_vat}`} />
        <CardButton text="Select This Skip" selected={selectedCardId === data.id}>
          <IconPicker name="ArrowRight" size={17} />
        </CardButton>
      </Card>
    ))}
  </div>
);

export default SkipList;
