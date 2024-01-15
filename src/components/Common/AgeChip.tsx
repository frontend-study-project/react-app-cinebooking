interface Props {
  age: string;
}

const AgeChip = ({ age }: Props) => {
  return <span className={`${age === '12' ? 'bg-age-12' : age === '15' ? 'bg-age-15' : age === '18' ? 'bg-age-18' : 'bg-age-all'} inline-block w-[20px] h-[20px] leading-[18px] text-white text-center font-bold tracking-tighter rounded-sm ${age === 'ALL' ? 'text-xs' : 'text-sm'}`}>{age}</span>;
};

export default AgeChip;
