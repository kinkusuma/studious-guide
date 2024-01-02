import { formatThousands } from '@/utils/formatter';
import Planet from './Planet';

type Props = {
  texture: string;
  className: string;
  name: string;
  diameter: string;
};

export default function PlanetWithName({ texture, className, name, diameter }: Props) {
  return (
    <Planet texture={texture} className={className}>
      <p className="md:text-3xl font-bold uppercase whitespace-nowrap shadow-2xl">{name}</p>

      <div className="flex items-center gap-2">
        <div className="h-[1px] w-8 bg-white" />
        <p className="text-xs md:text-base">⌀ {formatThousands(diameter)} km</p>
        <div className="h-[1px] w-8 bg-white" />
      </div>
    </Planet>
  );
}
